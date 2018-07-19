const express = require('express')
const bodyParser = require('body-parser') // process json data
const cors = require('cors')
const morgan = require('morgan') // log generator

const app = express() // builds an express server
app.use(morgan('combined')) // use the logger middleware (it'll print logs)
app.use(bodyParser.json()) // allow express to parse json easily
app.use(cors()) // anyone can use this shit (TAKE THIS OUT ON PRODUCTION)

app.get('/status', (req, res) => {
  res.send({
    message: 'hello, motherfucker!'
  })
})
app.listen(process.env.PORT || 8081)
