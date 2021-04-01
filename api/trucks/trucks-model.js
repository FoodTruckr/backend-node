const db = require('../../data/db-config')

async function getAllTrucks() {
  const allTrucks = await db.raw(`
    SELECT array_to_json(array_agg(row_to_json(t)))
      FROM (
        SELECT truck_external_id, truck_name,
          (
            SELECT array_to_json(array_agg(row_to_json(d))) AS truck_photos
              FROM ( 
                SELECT truck_photo_id, truck_photo_url
                FROM truck_photos
                WHERE trucks.truck_id = truck_photos.truck_id
              )d
          ),
          (
            SELECT array_to_json(array_agg(row_to_json(r))) AS customer_ratings
              FROM (
                SELECT avg(customer_rating)
                FROM customer_reviews
                WHERE trucks.truck_id = customer_reviews.truck_id
              )r
          ),
          (
            SELECT array_to_json(array_agg(row_to_json(c))) AS cuisine_types
            FROM (
              SELECT ct.cuisine_type_id, cuisine_type_name
              FROM trucks AS tr
              JOIN truck_cuisines AS tc ON tr.truck_id = tc.truck_id
              JOIN cuisine_types AS ct ON tc.cuisine_type_id = ct.cuisine_type_id
              WHERE trucks.truck_id = tc.truck_id
            )c
          )
        FROM trucks
    ) t`)
  const processedTrucks = allTrucks.rows[0].array_to_json.map((truk) => {
    return {
      truckId: truk.truck_external_id,
      truckName: truk.truck_name,
      truckImages: truk.truck_photos.map((img) => {
        return {
          truckPhotoId: img.truck_photo_id,
          truckPhotoUrl: img.truck_photo_url
        }
      }),
      customerRatingAvg: truk.customer_ratings[0].avg,
      cuisineTypes: truk.cuisine_types.map((ct) => {
        return {
          cuisineTypeId: ct.cuisine_type_id,
          cuisineTypeName: ct.cuisine_type_name
        }
      })
    }
  })
  return processedTrucks
}

function getTruckByExtId() {
  db('trucks')
}

module.exports = {
  getAllTrucks
}
