import '../database';
import express from 'express';
import routes from '../routes';
import { HttpException } from '../middleware'


export default () => {
  // instance express
  const app = express();

  // Routes 
  routes(app);

  //Middlewares
  app.use(HttpException);
  // App
  return app;
}