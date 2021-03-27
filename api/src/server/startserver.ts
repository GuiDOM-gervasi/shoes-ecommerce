import {ApolloServer } from 'apollo-server-express'
import * as cors from 'cors';
import * as express from 'express';
import * as cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import User from "../db/models/users";
import { createTokens } from "./createTokens"
import Stripe from 'stripe';
import getCartForPayment from '#root/helpers/getCartForPayment';
import stripeCheckout from '#root/helpers/stripeCheckout';
import setCartPayed from '#root/helpers/setCartPayed';
import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import accessEnv from '#root/helpers/accessEnv';

const bodyParser = require('body-parser');
const apiKey = accessEnv("STRIPE_KEY");
const client = accessEnv("CLIENT_ADDRESS")

const stripe = new Stripe(apiKey, {
  apiVersion: '2020-08-27',  // to ensure compatibility with TS
});

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({ req, res })
  });


  const app = express();

  app.use(
    cors({
      origin: client,
      credentials: true,
      // preflightContinue: true
    //   exposedHeaders: [
    //     "Access-Control-Allow-Headers",
    //     "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
    //     "X-Password-Expired"
    //   ],
    //   optionsSuccessStatus: 200
    // })
    })
  );

  app.use(express.json());  
  app.use(cookieParser());

  // Stripe fullfil EndPoing
  app.post('/webhook', bodyParser.raw({type: 'application/json'}), async (request, response) => {
    console.log('/webhook')
    const payload = request.body;
    let event = request.body;
    let paymentIntent = event.data.object;

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log(`PaymentIntent for ${paymentIntent.amount} was successful!, ID: ${paymentIntent.id}`);
        let isSetPayed = await setCartPayed(paymentIntent.id)
        console.log('is cart set to payed:', isSetPayed)
        break;

      case 'checkout.session.completed':
        console.log(`PaymentIntent went wrong!, ID: ${paymentIntent.id}`);
        // get notification if the session expire, or is ended by payment or rejection
        break;

      case 'payment_intent.payment_failed':
          console.log(`PaymentIntent sommething went wrong with the card!, ID: ${paymentIntent.id}`);
          break;

      default:
        // Unexpected event type
    }

    response.status(200);
  });
  
  // Checkout for stripe EndPoint-------------------------------------
  app.post("/checkout", async (req, res) => {
    // const {userId}  = req.body;
    let userId = 4;
    let {count, price, status} = await getCartForPayment(userId)

    if (status === 'ok'){
      try{
      const session = await stripeCheckout(count, price, userId, stripe)
      res.json({ id: session.id });
      }
      catch(e){
        console.error(e)
        res.json({ error: 'something went worng' });
      }

    }else{
      res.json({ error: 'seems that the cart for this user is empty' });
    }

  });

  // Loggin endpoint  --------------------------------------------
  app.use(async (req: any, res, next) => {
    const refreshToken = req.cookies["refresh-token"];
    const accessToken = req.cookies["access-token"];
    if (!refreshToken && !accessToken) {
      return next();
    }

    try {
      const data = verify(accessToken, process.env.ACCESS_TOKEN_SECRET!) as any;
      req.userId = data.id;
      return next();
    } catch {}

    if (!refreshToken) {
      return next();
    }

    let data: any;

    try {
      data = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as any;
    } catch {
      return next();
    }

    const user = await User.findOne({
      where: {id: data.id}});

    if (!user || user.count !== data.count) {
      return next();
    }

    const tokens = createTokens(user);

    res.cookie("refresh-token", tokens.refreshToken,{ domain: 'localhost', path: '/' });
    res.cookie("access-token", tokens.accessToken,{ domain: 'localhost', path: '/' });
    req.userId = user.id;
    next();
  });

  // GraphQL endpoint
  server.applyMiddleware({ app, path: "/graphql", cors: false }); // app is from an existing express app

  app.listen({ port: 3001 }, () =>
    console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
  );
};

startServer();
