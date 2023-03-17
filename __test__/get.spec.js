const app = require('../src/app')
const supertest = require('supertest');
const { expect } = require('@jest/globals');
const request = supertest(app)


describe('Test Handlers', () => {
    test('responds to /', async () => {
        const res = await request.get('/');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

    test('responds to /movies', async () => {
        const res = await request.get('/movies');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })
})