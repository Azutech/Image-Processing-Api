"use strict";
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
/* eslint-disable indent */
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const main_1 = __importDefault(require("../routes/main"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/api', main_1.default, (req, res) => {
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
function cropImage() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)('./images/icelandwaterfall.jpeg')
                .extract({
                width: 500, height: 330, left: 120, top: 70,
            })
                .grayscale()
                .toFile('./images/icelandwaterfall---4.jpeg');
        }
        catch (error) {
            console.log(error);
        }
    });
}
cropImage();
app.listen(port, () => {
    console.log(`port is listening at port ${port}`);
});
exports.default = app;
