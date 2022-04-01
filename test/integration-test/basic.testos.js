const request = require('supertest')
const app = require('../../app')
require('dotenv').config()
let data, server, userData, key

describe('[Integration Testing] - Task Controller', () => {
    beforeAll(function() {
        // setup http request
        server = request(app)
    })

    test('get all task', done => {
        server.get('/').set({ 
            'Content-Type': 'application/json'
        }).then(response => {
            expect(response.statusCode).toBe(200)
            done()
        })

    });
})