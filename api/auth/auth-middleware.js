const Auth = require('./auth-model')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./secrets')

const checkUsernameExists = async (req, res, next) => {
  const { username } = req.body
  try {
    const userExists = await Auth.userExists(username)
    if (!userExists) {
      res.status(401).json({ message: 'Invalid Credentials' })
    } else {
      req.userExists = userExists
      next()
    }
  } catch (err) {
    next(err)
  }
}

const buildToken = (user) => {
  const payload = {
    subject: user.user_external_id,
    username: user.username,
    role: user.role
  }
  const config = {
    expiresIn: '1d'
  }
  return jwt.sign(payload, jwtSecret, config)
}
module.exports = {
  checkUsernameExists,
  buildToken
}
