/* eslint-disable */

import { Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import fs from 'fs';

fs.mkdirSync('./images', { recursive: true }); // create folder for resized images

// get files to be edited
const images: string[] = [];
// console.log(images)

fs.readdir('./images/', (err, files) => {
  if (err) {
    throw new Error(`${err}`);
  } else {
    files.forEach((file) => {
      // const imageX = 
      images.push(`./images/${file}`);

      // console.log(images)
      // return imageX;
    });

    //  console.log(files)
    //console.log(err);
  }
});


// The sharp library implementation
const resizeImages =  (req: Request, res: Response, next: NextFunction) => {
  try {
    if (images.length > 1) {
      // eslint-disable-next-line array-callback-return
      images.map(async (item) => {
        const filenameArr = item.split('/');
        const filename = filenameArr[filenameArr.length - 1];
        // console.log(item)
        // console.log(filenameArr)
        console.log(filename)

        
        const resized = await sharp(item).resize(200, 200).toFile(`./resized-images/${filename}`)
        console.log(resized)
        
    
      });
    }
    next();
  } catch (error) {
    res.send(error);
  }
};

export default resizeImages;