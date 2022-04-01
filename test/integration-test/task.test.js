const request = require('supertest')
const app = require('../../app')
const {faker} = require('@faker-js/faker')
require('dotenv').config()
let data, server, userData, key

describe('[Integration Testing] - Task Controller', () => {
    beforeAll(async function() {
        // setup http request
        server = request.agent(app)

        // create fake data for fake taske
        data = {
            title: faker.name.title(),
            description: faker.commerce.productDescription(),
            userId: 1,
        }

        // sign to get api-key from server
        await server.post('/api/v1/signin').set({
            'Content-Type': 'application/json'
        }).send({
            "email": "sayidinaahmadalqososyi@gmail.com",
            "password": "osicozycozy"
        }).then((response) => {
            key = response.body.key
        })

    })

    afterAll(function (done) {
        data = {}

        done()
    })

    test('add task', function(done) {
        server.post('/api/v1/tasks').set({ 
            'Content-Type': 'application/json', 
            'x-api-key': key
        }).send(data).then(res => {
            expect(res.statusCode).toBe(201)
            expect(res.get('Content-Type')).toMatch(/json/)
            expect(res.body.msg).toBe('Successfully create new task')
            expect(res.body.data && typeof res.body.data === 'object').toBe(true)
            id = res.body.data.id
            done()
        })

    });

    test('get all task', function (done)  {
        server.get('/api/v1/tasks').set({ 
            'Content-Type': 'application/json', 
            'x-api-key': key
        }).then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.get('Content-Type')).toMatch(/json/)
            expect(response.body.msg).toBe('Success retrieve the task')
            expect(Array.isArray(response.body.data)).toBe(true)
            done()
        })

    });

    test('get spesific task', (done) => {
        server.get('/api/v1/tasks/'+id).set({ 
            'Content-Type': 'application/json', 
            'x-api-key': key
        }).then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.get('Content-Type')).toMatch(/json/)
            expect(res.body.msg).toBe('Success retrieve detail task')
            expect(res.body.data && typeof res.body.data === 'object').toBe(true)
            done()
        })

    });

    test('update task', function (done) {
		server.put('/api/v1/tasks/'+id)
            .set({ 
                'Content-Type': 'application/json', 
                'x-api-key': key
            })
			.send(data).then(res => {
                expect(res.statusCode).toBe(201)
                expect(res.get('Content-Type')).toMatch(/json/)
                expect(res.body.msg).toBe('Success updated task')
                done()
            })

	})

	test('delete task', function (done) {
		server.delete('/api/v1/tasks/'+id)
        .set({ 
            'Content-Type': 'application/json', 
            'x-api-key': key
        })
        .then(res => {
            expect(res.statusCode).toBe(200)
            expect(res.get('Content-Type')).toMatch(/json/)
            expect(res.body.msg).toBe('Successfully delete task')
            done()
        })

	})
})