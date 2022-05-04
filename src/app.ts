/* eslint-disable indent */
/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';

import sharp from 'sharp';

import routes from "../routes/main";

const app: Application = express();

const port: Number = 3000;

app.use('/api', routes, (req: Request, res: Response) => {
  res.status(200).send("Here we go, let's make this images resize");
});
// eslint-disable-next-line no-unused-expressions
// async function cropImage() {
//   {
//     try {
//       await sharp().extract({
//  width: 500, height: 330, left: 120, top: 70,
//       })
//       .grayscale().toFile("./images/icelandwaterfall-22.jpeg");
//     } catch (error) {
//         console.log(error);
//    }
// }

async function cropImage(): Promise<void> {
  try {
    await sharp('./images/icelandwaterfall.jpeg')
      .extract({
 width: 500, height: 330, left: 120, top: 70,
})
      .grayscale()
      .toFile('./images/icelandwaterfall---4.jpeg');
  } catch (error) {
    console.log(error);
  }
}

cropImage();

app.listen(port, () => {
  console.log(`port is listening at port ${port}`);
});

export default app;
