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
// import Stripe from 'stripe';

import { v4 as uuidv4 } from 'uuid';

const apiKey = accessEnv("STRIPE_KEY");
console.log(apiKey)
const stripe = require('stripe')("sk_test_51IYWrFKvrKT0hMD3VGaum9Pt8mt9zuz1JYA1rOPZnGuPXfJ8FjtWdgyRdL2T3tDhvQqHx5YciHk867wy5Q53W5iz00QMvzb6p0")
// const stripe = new Stripe(apiKey, {
//   apiVersion: '2020-08-27',  // to ensure compatibility with TS
// });

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
      origin: "*",
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

  // Checkout for stripe EndPoint-------------------------------------
  app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);
  
    try{
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'T-shirt',
              },
              unit_amount: 2000,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3001/success',
        cancel_url: 'http://localhost:3001/cancel',
      });
  
      res.json({ id: session.id });
    }
    catch(e){
      console.error(e)
      res.json({ error: 'something went worng' });
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
