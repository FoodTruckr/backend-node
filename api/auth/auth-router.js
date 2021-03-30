const router = require('express').Router()

/***** Base URL: /api/auth *****/

// [POST] create new diner/operator (/new)
router.post('/new', (req, res, next) => {
  try {
    res.send('exists')
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
