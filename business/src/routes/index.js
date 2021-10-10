import testRouter from './test.router';
import userRouter from './user.routes';

export default (app) => {
  app.use("/test", testRouter);
  app.use("/user", userRouter);
}