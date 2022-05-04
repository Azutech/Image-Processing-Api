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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe('endpoint testing', () => {
    it('it should be able to test for endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const request = (0, supertest_1.default)(app_1.default);
        const response = yield request.get('/api');
        console.log(response);
        expect(response.status).toBe(200);
        console.log(response.text);
    }));
});
// describe('/GET Response testing', () => {
//   const data = {};
//   beforeAll((done) => {
//     app.get('/api', (error, body) => {
//       data.status = response.statusCode;
//       data.body = body;
//       done();
//     });
//   });
// });
