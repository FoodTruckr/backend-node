const router = require('express').Router()

/***** Base URL: /api/diner *****/

// [GET] Retrieve individual diner info (/api/diner/:dinerId)
router.get('/:dinerId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] Add favorite trucks (/:dinerId/favorites)
router.post('/:dinerId/favorites', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] Add customer rating for truck (/:dinerId/ratings)
router.post('/:dinerId/ratings', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] Edit diner rating of truck (/:dinerId/ratings)
router.put('/:dinerId/ratings', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] Delete diner ratings of truck (/:dinerId/ratings)
router.delete('/:dinerId/ratings', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] Remove truck from diner favorites(/:dinerId/favorites)
router.delete('/:dinerId/favorites', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: `Something horrible happened when trying to process your ${req.method} request in the diners router.`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router