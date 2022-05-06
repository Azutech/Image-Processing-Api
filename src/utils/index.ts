import path from 'path';

const filedir = process.cwd();

const images: string[] = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica'
  
];

const originalImgPath = path.join(filedir, '/images');

const resizedImgpath = path.join(filedir, '/images/resized-images');

export default { images, originalImgPath, resizedImgpath };
