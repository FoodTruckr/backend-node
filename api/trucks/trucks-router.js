const router = require('express').Router()

/***** Base URL: /api/trucks *****/

// [GET] all trucks (/)
router.get('/', (req, res, next) => {
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
      },
      {
        truckId: 4,
        truckName: 'Trucky',
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
