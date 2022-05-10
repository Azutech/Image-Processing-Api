"use strict";
/* eslint-disable */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
fs_1.default.mkdirSync('./images', { recursive: true }); // create folder for resized images
// get files to be edited
const images = [];
// console.log(images)
fs_1.default.readdir('./images/', (err, files) => {
    if (err) {
        throw new Error(`${err}`);
    }
    else {
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
const resizeImages = (req, res, next) => {
    try {
        if (images.length > 1) {
            // eslint-disable-next-line array-callback-return
            images.map((item) => __awaiter(void 0, void 0, void 0, function* () {
                const filenameArr = item.split('/');
                const filename = filenameArr[filenameArr.length - 1];
                // console.log(item)
                // console.log(filenameArr)
                console.log(filename);
                const resized = yield (0, sharp_1.default)(item).resize(200, 200).toFile(`./resized-images/${filename}`);
                console.log(resized);
            }));
        }
        next();
    }
    catch (error) {
        res.send(error);
    }
};
exports.default = resizeImages;
