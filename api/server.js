const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'))
}

// Catch all
server.use('*', (req, res) => {
  res.status(404).json({
    message: `Sorry, this is not a valid location for a ${req.method} request`
  })
})

module.exports = server
