/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';

const routes = express.Router();

const runner = (req: Request, res: Response, next: NextFunction) => {
  setTimeout(() => {
    // eslint-disable-next-line no-unused-expressions
    console.log('Runner Runner, Chicken Dinner'), 2000;
  });

  next();
};

routes.use('/', runner, (req: express.Request, res:express.Response) => {
  res.status(200).send('');
});

export default routes;
