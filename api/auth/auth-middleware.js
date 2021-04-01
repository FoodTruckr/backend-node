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

const restricted = (only) => (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    res.status(401).json({ message: 'A token is required ' })
  } else {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        res
          .status(401)
          .json({ message: 'Token error, please try logging in again' })
      } else {
        req.decodedJwt = decoded
        if (only && req.decodedJwt.role !== only) {
          res.status(403).json({
            message: `Sorry, only ${only}s are allowed here. Try a different account.`
          })
        } else if (!checkUsernameExists(req.decodedJwt.username)) {
          res.status(404).json({
            message:
              "Something went wrong! We can't find you in our system! Please try logging in again."
          })
        } else {
          next()
        }
      }
    })
  }
}
module.exports = {
  checkUsernameExists,
  buildToken,
  restricted
}
