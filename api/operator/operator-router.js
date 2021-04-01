const router = require('express').Router()

/***** Base URL: /api/operator *****/

// [GET] individual operator (/:operatorId)
router.get('/', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] add new truck (/:operatorId)
router.post('/', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] new menu item (/:operatorId/:truckId)
router.post('/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit menu item (/:operatorId/:truckId/:itemId)
router.post('/:truckId/:itemId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit truck info (/:operatorId/:truckId/)
router.post('/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete truck (/:operatorId/:truckId/)
router.post('/:truckId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete menu item (/:operatorId/:truckId/:itemId)
router.post('/:truckId', (req, res, next) => {
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

// [POST] create new cuisine type (/:userId/cuisines)
router.post('/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit cuisine type (/:userId/cuisines/:cuisineTypeId)
router.put('/cuisines/:cuisineTypeId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete cuisine type (/:userId/cuisines/:cuisineTypeId)
router.delete('/cuisines/:cuisineTypeId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [GET] Get all menu item (/:userId/menu)
router.get('/menu', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})
// [POST] new menu item (/:userId/menu)
router.post('/menu', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})
// [PUT] edit menu item (/:userId/menu/:itemId)
router.put('/menu/:itemId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})
// [DELETE] delete menu item (/:userId/menu/:itemId)
router.delete('/menu/:itemId', (req, res, next) => {
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
