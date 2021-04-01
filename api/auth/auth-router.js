const router = require('express').Router()
const bcrypt = require('bcryptjs')
const { nanoid } = require('nanoid')
const Auth = require('./auth-model')
const { ROUNDS } = require('./secrets')

const { checkUsernameExists, buildToken } = require('./auth-middleware')

/***** Base URL: /api/auth *****/

//! Need middleware to verify info from request

// [POST] create new diner/operator (/new)
router.post('/register', async (req, res, next) => {
  const { username, password, role, email } = req.body
  try {
    const hash = await bcrypt.hashSync(password, ROUNDS)
    const dbEntry = {
      username,
      password: hash,
      role,
      email,
      user_external_id: nanoid(6)
    }
    const newUser = await Auth.addUser(dbEntry)
    res.status(201).json(newUser)
  } catch (err) {
    next(err)
  }
})

// [POST] Login (/login)
router.post('/login', checkUsernameExists, (req, res, next) => {
  try {
    if (bcrypt.compareSync(req.body.password, req.userExists.password)) {
      const token = buildToken(req.userExists)
      res.json({
        userId: req.userExists.user_external_id,
        username: req.userExists.username,
        role: req.userExists.role,
        email: req.userExists.email,
        token
      })
    } else {
      res.status(401).json({ message: 'Invalid Credentials' })
    }
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
