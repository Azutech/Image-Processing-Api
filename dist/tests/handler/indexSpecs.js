"use strict";
// /* eslint-disable import/extensions */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resizedImages_1 = __importDefault(require("../../src/handler/resizedImages"));
describe('test the functonality of resize', () => {
    it('resized images to thumbnail size', () => {
        expect(resizedImages_1.default).not.toBeFalsy();
    });
});
