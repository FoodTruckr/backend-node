const db = require('../../data/db-config')
const Truck = require('../trucks/trucks-model')

async function getDiner(username) {
  const diner = await db('users as u')
    .select('username', 'truck_external_id', 'truck_name')
    .where('username', username)
    .leftJoin('favorite_trucks as ft', 'u.user_id', 'ft.user_id')
    .join('trucks as t', 'ft.truck_id', 't.truck_id')
  const processedDiner = {
    username,
    favoriteTrucks: diner.map((fav) => {
      return {
        truckId: fav.truck_external_id,
        truckName: fav.truck_name
      }
    })
  }
  return processedDiner
}

async function getFaves(user_id) {
  let faves = await db('users as u')
    .select('t.truck_external_id', 't.truck_name')
    .where('u.user_id', user_id)
    .leftJoin('favorite_trucks as ft', 'u.user_id', 'ft.user_id')
    .join('trucks as t', 'ft.truck_id', 't.truck_id')
  return {
    favoriteTrucks: faves.map((fav) => {
      return {
        truckId: fav.truck_external_id,
        truckName: fav.truck_name
      }
    })
  }
}
// async function getTruckId(truckExtId) {
//   const { truck_id } = await db('trucks')
//     .select('truck_id')
//     .where('truck_external_id', truckExtId)
//     .first()
//   return truck_id
// }

async function newFave(user_id, truckId) {
  const truck_id = await Truck.getTruckId(truckId)
  await db('favorite_trucks').insert({ user_id: user_id, truck_id: truck_id })
  return getFaves(user_id)
}
async function newRating(user_id, truckId, starRating, review) {
  const truck_id = await Truck.getTruckId(truckId)
  await db('customer_reviews').insert({
    user_id,
    truck_id,
    customer_rating: starRating,
    customer_review: review
  })
  return Truck.getTruckRatings(truck_id)
}

async function updateRating(user_id, truckId, starRating, review) {
  const truck_id = await Truck.getTruckId(truckId)
  await db('customer_reviews').where({ user_id, truck_id }).update({
    customer_rating: starRating,
    customer_review: review
  })
  return Truck.getTruckRatings(truck_id)
}

async function deleteRating(user_id, truckId) {
  const truck_id = await Truck.getTruckId(truckId)
  await db('customer_reviews').where({ user_id, truck_id }).del()
  return Truck.getTruckRatings(truck_id)
}

async function removeFave(user_id, truckId) {
  const truck_id = await Truck.getTruckId(truckId)
  await db('favorite_trucks').where({ user_id, truck_id }).del()
  return getFaves(user_id)
}

module.exports = {
  getDiner,
  newFave,
  getFaves,
  // getTruckId,
  newRating,
  updateRating,
  deleteRating,
  removeFave
}
