"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resizedImages_1 = __importDefault(require("../handler/resizedImages"));
const routes = express_1.default.Router();
routes.get('/', resizedImages_1.default, (req, res) => {
    try {
        res.status(200).json({ Message: 'Images have been resized successfully.' });
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
});
exports.default = routes;
