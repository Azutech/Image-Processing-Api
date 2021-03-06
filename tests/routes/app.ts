import supertest from 'supertest';

import app from '../../src/server';

describe('endpoint testing', () => {
  it('it should be able to test for endpoint', async () => {
    const request = supertest(app);
    const response = await request.get('/');
    console.log(response);
    expect(response.status).toBe(200);
    console.log(response.text);
  });
});
