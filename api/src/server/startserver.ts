import {ApolloServer } from 'apollo-server-express'
import * as cors from 'cors';
import * as express from 'express';
import accessEnv from '#root/helpers/accessEnv';
import resolvers from '#root/graphql/resolvers';
import typeDefs from '#root/graphql/typeDefs';
import * as cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import User from "../db/models/users";
import { createTokens } from "./createTokens"
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';

const apiKey = accessEnv("STRIPE_KEY");

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

  app.use(express.json());  
  app.use(cookieParser());

  app.use(
    cors({
      origin: "http://localhost:3000",
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

  // Checkout for stripe end point
  app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    let error;
    let status;
    try {
      const { product, token } = req.body;
  
      const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
      });
  
      const idempotency_key = uuidv4();
      const charge = await stripe.charges.create(
        {
          amount: product.price * 100,   //always should be converted to cents
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `Purchased the ${product.name}`,
          // shipping: {
          //   name: token.card.name,
          //   address: {
          //     line1: token.card.address_line1,
          //     line2: token.card.address_line2,
          //     city: token.card.address_city,
          //     country: token.card.address_country,
          //     postal_code: token.card.address_zip
          //   }
          // }
        },
        {
          idempotency_key
        }
      );
      console.log("Charge:", { charge });
      status = "success";
    } catch (error) {
      console.error("Error:", error);
      status = "failure";
    }
    res.json({ error, status });
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
