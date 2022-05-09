/* eslint-disable indent */
/* eslint-disable no-console */
import express, { Application } from 'express';
import routes from './routes/index';

const app: Application = express();

const port: Number = 3000;

app.use('/', routes);

app.listen(port, () => {
  console.log(`port is listening at port ${port}`);
});

export default app;
