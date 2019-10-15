const { app, runServer, closeServer } = require('./../../server');
const supertest = require('supertest');
const request = supertest(app);

beforeAll(() => {
    return runServer();
});

afterAll(() => {
    return closeServer();
});

describe('getHealth', () => {
    it('returns status 200 and status running', async done => {
        const res = await request.get('/v1/health');
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('running');
        done();
    });
});
