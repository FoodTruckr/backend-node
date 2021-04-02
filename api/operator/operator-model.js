const db = require('../../data/db-config')

async function getOpTrucks(operatorId) {
  const trucks = await db('trucks as tr')
    .select(
      db.raw(
        `json_agg(json_build_object(
          'truckId', truck_id,
          'truckName',truck_name,
          'currentLocation', (SELECT 
            json_build_object(
              'address', address,
              'city', city,
              'state', state,
              'zipCode', zip_code)
            FROM trucks
            WHERE trucks.user_id = ?),
          ))`,
        [operatorId]
      )
    )
    .where('tr.user_id', operatorId)
  return trucks.json_build_object
}

module.exports = {
  getOpTrucks
}
