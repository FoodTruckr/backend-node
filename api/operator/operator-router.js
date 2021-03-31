const router = require('express').Router()

/***** Base URL: /api/operator *****/

// [GET] individual operator (/:operatorId)
router.get('/:operatorId', (req, res, next) => {
  try {
    res.json([
      {
        truckId: 1,
        truckName: 'Mother Trucker',
        imageOfTruck:
          'https://www.bangkokexpatlife.com/wp-content/uploads/2015/07/mother-trucker-food-truck-in-bangkok.jpg',
        customerRatingAvg: '4.5',
        cuisineTypes: [
          { cuisineTypeId: 1, cuisineTypeName: 'American' },
          { cuisineTypeId: 2, cuisineTypeName: 'Mexican' },
          { cuisineTypeId: 3, cuisineTypeName: 'Tex-Mex' }
        ]
      },
      {
        truckId: 2,
        truckName: 'Mother Trucker Squared',
        imageOfTruck:
          'https://www.bangkokexpatlife.com/wp-content/uploads/2015/07/mother-trucker-food-truck-in-bangkok.jpg',
        customerRatingAvg: '4.5',
        cuisineTypes: [
          { cuisineTypeId: 1, cuisineTypeName: 'American' },
          { cuisineTypeId: 2, cuisineTypeName: 'Mexican' },
          { cuisineTypeId: 3, cuisineTypeName: 'Tex-Mex' }
        ]
      },
      {
        truckId: 3,
        truckName: 'The Truckiest Mother Trucker',
        imageOfTruck:
          'https://www.bangkokexpatlife.com/wp-content/uploads/2015/07/mother-trucker-food-truck-in-bangkok.jpg',
        customerRatingAvg: '4.5',
        cuisineTypes: [
          { cuisineTypeId: 1, cuisineTypeName: 'American' },
          { cuisineTypeId: 2, cuisineTypeName: 'Mexican' },
          { cuisineTypeId: 3, cuisineTypeName: 'Tex-Mex' }
        ]
      }
    ])
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

// [GET] retrieve all cuisine types (/cuisines)
router.get('/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [POST] create new cuisine type (/:userId/cuisines)
router.post('/:userId/cuisines', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [PUT] edit cuisine type (/:userId/cuisines/:cuisineTypeId)
router.put('/:userId/cuisines/:cuisineTypeId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [DELETE] delete cuisine type (/:userId/cuisines/:cuisineTypeId)
router.delete('/:userId/cuisines/:cuisineTypeId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})

// [GET] Get all menu item (/:userId/menu)
router.get('/:userId/menu', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})
// [POST] new menu item (/:userId/menu/)
router.post('/:userId/menu/', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})
// [PUT] edit menu item (/:userId/menu/:itemId)
router.put('/:userId/menu/:itemId', (req, res, next) => {
  try {
    res.send('exists')
  } catch (err) {
    next(err)
  }
})
// [DELETE] delete menu item (/:userId/menu/:itemId)
router.delete('/:userId/menu/:itemId', (req, res, next) => {
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
