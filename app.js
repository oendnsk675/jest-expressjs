const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
require('dotenv').config()
const UserController = require('./app/Controllers/user.controller.js')

app.use(cors())
app.use(bodyParser.json())

// uncoment this for see the log requests
// app.use(logger('dev')) 

const default_router = `/api/${process.env.APP_VERSION}`
require('./app/Routes')(express, app, default_router)

module.exports = app