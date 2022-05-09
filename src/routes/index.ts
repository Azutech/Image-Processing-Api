import express, { Request, Response } from 'express';
import resizeImages from '../handler/resizedImages';

const routes = express.Router();

routes.get('/', resizeImages, (req: Request, res: Response) => {
  try {
    res.status(200).json({ Message: 'Images have been resized successfully.' });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default routes;
