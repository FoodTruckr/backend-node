const router = require('express').Router()
const Diner = require('./diner-model')

/***** Base URL: /api/diner *****/

// [GET] Retrieve individual diner info (/api/diner/:dinerId)
router.get('/', async (req, res, next) => {
  try {
    const diner = await Diner.getDiner(req.userExists.username)
    res.json(diner)
  } catch (err) {
    next(err)
  }
})

// [POST] Add favorite trucks (/favorites)
router.post('/favorites', async (req, res, next) => {
  const { user_id } = req.userExists
  const { truckId } = req.body
  try {
    const faves = await Diner.newFave(user_id, truckId)
    res.status(201).json(faves)
  } catch (err) {
    next(err)
  }
})

// [POST] Add customer rating for truck (/:dinerId/ratings)
router.post('/ratings', async (req, res, next) => {
  const { user_id } = req.userExists
  const { truckId, starRating, review } = req.body
  try {
    const ratings = await Diner.newRating(user_id, truckId, starRating, review)
    res.status(201).json(ratings)
  } catch (err) {
    next(err)
  }
})

// [PUT] Edit diner rating of truck (/:dinerId/ratings)
router.put('/ratings', async (req, res, next) => {
  const { user_id } = req.userExists
  const { truckId, starRating, review } = req.body
  try {
    const ratings = await Diner.updateRating(
      user_id,
      truckId,
      starRating,
      review
    )
    res.json(ratings)
  } catch (err) {
    next(err)
  }
})

// [DELETE] Delete diner ratings of truck (/:dinerId/ratings)
router.delete('/ratings', async (req, res, next) => {
  const { user_id } = req.userExists
  const { truckId } = req.body
  try {
    const ratings = await Diner.deleteRating(user_id, truckId)
    res.json(ratings)
  } catch (err) {
    next(err)
  }
})

// [DELETE] Remove truck from diner favorites(/:dinerId/favorites)
router.delete('/favorites', async (req, res, next) => {
  const { user_id } = req.userExists
  const { truckId } = req.body
  try {
    const faves = await Diner.removeFave(user_id, truckId)
    res.json(faves)
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
