const Truck = require('./trucks-model')

const truckExists = async (req, res, next) => {
  try {
    const { truckId } = req.params
    const exists = await Truck.getTruckByExtId(truckId)
    if (!exists) {
      res.status(404).json({ message: "Sorry, this truck can't be found" })
    } else {
      req.truckExists = exists
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  truckExists
}
