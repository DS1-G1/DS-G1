import "dotenv/config";
import '../database';
import 'express-async-errors';
import express from 'express';
import routes from '../routes';
import { HttpException, requestInfo } from '../middleware'
import cors from "cors";


export default () => {
  // instance express
  const app = express();
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.use(
    cors({
      origin: "*",
      allowedHeaders: "*",
    })
  );
  // Routes 
  routes(app);

  //Middlewares
  app.use(requestInfo);
  app.use(HttpException);
  // App
  return app;
}