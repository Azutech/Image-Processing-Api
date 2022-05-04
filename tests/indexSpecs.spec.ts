/* eslint-disable import/extensions */
import { response } from 'express';
import supertest from 'supertest';

import app from "../src/app";

describe('endpoint testing', () => {
  it('it should be able to test for endpoint', async () => {
    const request = supertest(app);
    const response = await request.get('/api');
    console.log(response);
    expect(response.status).toBe(200);
    console.log(response.text);
  });
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
