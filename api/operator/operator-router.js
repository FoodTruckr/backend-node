const router = require('express').Router()

/***** Base URL: /api/operator *****/

// [GET] individual operator (/:operatorId)
router.get('/:operatorId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] add new truck (/:operatorId)
router.post('/:operatorId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] new menu item (/:operatorId/:truckId)
router.post('/:operatorId/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit menu item (/:operatorId/:truckId/:itemId)
router.post('/:operatorId/:truckId/:itemId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit truck info (/:operatorId/:truckId/)
router.post('/:operatorId/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete truck (/:operatorId/:truckId/)
router.post('/:operatorId/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete menu item (/:operatorId/:truckId/:itemId)
router.post('/:operatorId/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: `Something horrible happened when trying to process your ${req.method} request in the operators router.`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router
