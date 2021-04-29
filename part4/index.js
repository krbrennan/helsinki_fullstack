const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const middleware = require('./util/util.js')

const config = require('./util/config.js')


const supertest = require('supertest')

const logger = require('./util/util.js')

mongoose.connect('mongodb+srv://nivek:cfKLA8v2LUqpnij@cluster0.derx4.mongodb.net/myFirstDatabase-test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())
// app.use(middleware.requestLogger)

const api = supertest(app)

app.use('/api/blogs', blogRouter)


const listHelper = require('./util/list_helper')
const { appendFile } = require('fs')

// test('dummy returns one', () => {
//   const blogs = []

//   const result = listHelper.dummy(blogs)
//   expect(result).toBe(1)
// })

const server = app.listen(3001, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

module.exports = server