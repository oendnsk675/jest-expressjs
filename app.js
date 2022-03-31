const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

require('./app/Routes')(express, app)

module.exports = app