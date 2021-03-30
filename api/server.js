const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')

const authRouter = require('./auth/auth-router')
const dinerRouter = require('./diner/diner-router')
const operatorRouter = require('./operator/operator-router')
const trucksRouter = require('./trucks/trucks-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

if (process.env.NODE_ENV === 'development') {
  server.use(morgan('dev'))
}

//Routes
server.use('/api/auth', authRouter)
server.use('/api/diner', dinerRouter)
server.use('/api/operator', operatorRouter)
server.use('/api/trucks', trucksRouter)

// Catch all
server.use('*', (req, res) => {
  res.status(404).json({
    message: `Sorry, this is not a valid location for a ${req.method} request`
  })
})

module.exports = server
