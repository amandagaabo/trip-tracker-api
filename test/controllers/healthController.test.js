const app = require('./../../server');
const supertest = require('supertest');
const request = supertest(app);

describe('getHealth', () => {
    it('returns status 200', async done => {
        const res = await request.get('/v1/health');
        expect(res.statusCode).toEqual(200);
        done();
    });
    it('returns message API is healthy', async done => {
        const res = await request.get('/v1/health');
        expect(res.body.message).toEqual('API is healthy');
        done();
    });
});