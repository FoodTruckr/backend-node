const router = require('express').Router()
const Truck = require('./trucks-model')

/***** Base URL: /api/trucks *****/

// [GET] all trucks (/)
router.get('/', async (req, res, next) => {
  try {
    const allTrucks = await Truck.getAllTrucks()
    res.json(allTrucks)
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

// eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(500).json({
    message: `Something horrible happened when trying to process your ${req.method} request in the trucks router.`,
    errMessage: err.message,
    stack: err.stack
  })
})

module.exports = router
