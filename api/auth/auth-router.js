const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { nanoid } = require('nanoid')
const { jwtSecret, ROUNDS } = require('./secrets')
const Auth = require('./auth-model')

/***** Base URL: /api/auth *****/

// [POST] create new diner/operator (/new)
router.post('/new', async (req, res, next) => {
  const { username, password, role } = req.body
  try {
    const hash = await bcrypt.hashSync(password, ROUNDS)
    const dbEntry = {
      username,
      password: hash,
      role,
      user_external_id: nanoid(6)
    }
    const newUser = await Auth.newUser(dbEntry)
    res.status(201).json(newUser[0])
  } catch (err) {
    next(err)
  }
})

// [POST] Login (/login)
router.post('/login', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: `Something horrible happened when trying to process your ${req.method} request in the auth router.`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router
