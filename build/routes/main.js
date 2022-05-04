"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const runner = (req, res, next) => {
    setTimeout(() => {
        // eslint-disable-next-line no-unused-expressions
        console.log('Runner Runner, Chicken Dinner'), 2000;
    });
    next();
};
routes.use('/', runner, (req, res) => {
    res.status(200).send('');
});
exports.default = routes;
