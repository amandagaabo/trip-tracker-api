const { app, runServer, closeServer } = require('./../../server');
const supertest = require('supertest');
const request = supertest(app);

beforeEach(() => {
    return runServer();
});

afterEach(() => {
    return closeServer();
});

describe('getHealth', () => {
    it('returns status 200', async () => {
        const res = await request.get('/v1/health');
        expect(res.statusCode).toEqual(200);
    });
    it('returns success: true', async () => {
        const res = await request.get('/v1/health');
        expect(res.body.success).toEqual(true);
    });
    it('returns message API is healthy', async () => {
        const res = await request.get('/v1/health');
        expect(res.body.message).toEqual('API is healthy');
    });
});