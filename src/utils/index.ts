import path from 'path';

const filedir = process.cwd();

const images: string[] = [
  'fjord',
  'encenadaport',
  'palmtunnel',
  'santamonica',
  'icelandwaterfall',
];

const originalImgPath = path.join(filedir, '/images');

const resizedImgpath = path.join(filedir, '/images/resized-images');

export default { images, originalImgPath, resizedImgpath };
