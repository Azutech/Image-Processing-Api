// import sharp from 'sharp';
// import { Request, Response, Router } from 'express';
// import fs from 'fs'

// const imageRoutes = Router();

// // endpoint

// imageRoutes.get('/images', async (req: Request, res: Response) => {
//   try {
//     await sharp  ('images/fjord.jpeg')
//       .resize(200, 300)
//       .toFile('resized-image/newpic.jpeg');
//     res.send('Task Completed');
//   } catch (error) {
//     console.log(error);
//     res.send('cant resize images');
//   }
// });

// export default imageRoutes;

// import { Request, Response, NextFunction } from 'express';
// import sharp from 'sharp';
// import fs from 'fs';

// fs.mkdirSync('./assets/resized', { recursive: true }); // create folder for resized images

// // get files to be edited
// const images: string[] = [];

// fs.readdir('./assets/original', (err, files) => {
//   if (err) {
//     throw new Error(`${err}`);
//   } else {
//     files.forEach((file) => {
//       images.push(`./assets/original/${file}`);
//     });
//   }
// });

// const resizeImages = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   if (images.length > 1) {
//     // eslint-disable-next-line array-callback-return
//     images.map((item) => {
//       const filenameArr = item.split('/');
//       const filename = filenameArr[filenameArr.length - 1];
//       sharp(item).resize(200, 200).toFile(`./assets/resized/${filename}`);
//     });
//   }
//   next();
// };
