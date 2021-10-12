import testRouter from './test.router';
import userRouter from './user.routes';
import ongRouter from './ong.routes';

export default (app) => {
  app.use("/test", testRouter);
  app.use("/user", userRouter);
  app.use("/ong", ongRouter);
}