const router = require('express').Router()

/***** Base URL: /api/trucks *****/

// [GET] all trucks (/)
router.get('/', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [GET] individual truck (/:truckId)
router.get('/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [GET] retrieve all cuisine types (/cuisines)
router.get('/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] create new cuisine type (/cuisines)
router.post('/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit cuisine type (/cuisines)
router.put('/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete cuisine type (/cuisines)
router.delete('/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: `Something horrible happened when trying to process your ${req.method} request in the trucks router.`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router
