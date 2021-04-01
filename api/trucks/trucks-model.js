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

async function getTruckId(extId) {
  const [{ truck_id }] = await db('trucks')
    .where('truck_external_id', extId)
    .select('truck_id')
  return truck_id
}

async function getTruckByExtId(extId) {
  const truck_id = await getTruckId(extId)

  const foundTruck = await db('trucks')
    .select(
      db.raw(
        `json_build_object(
          'truckId', truck_id,
          'truckName',truck_name,
          'currentLocation', (SELECT 
            json_build_object(
              'address', address,
              'city', city,
              'state', state,
              'zipCode', zip_code)
            FROM trucks
            WHERE truck_id = ?),
          'currentGpsLocation', (SELECT
            json_build_object(
              'latitude', truck_latitude,
              'longitude', truck_longitude)
            FROM trucks
            WHERE truck_id = ?),
          'truckImages', (SELECT
            json_agg(json_build_object(
                'truckPhotoId', truck_photo_id,
                'truckPhotoUrl', truck_photo_url))
            FROM trucks AS tr
            JOIN truck_photos AS tp
              ON tr.truck_id = tp.truck_id
            WHERE tr.truck_id = ?),
          'cuisineTypes', (SELECT
            json_agg(json_build_object(
              'cuisineTypeId', ct.cuisine_type_id,
              'cuisineTypeName', ct.cuisine_type_name))
            FROM trucks AS tr
            JOIN truck_cuisines AS tc 
              ON tr.truck_id = tc.truck_id
            JOIN cuisine_types AS ct
              ON tc.cuisine_type_id = ct.cuisine_type_id
            WHERE tr.truck_id = ?),
          'customerRatingAvg', (SELECT
            avg(customer_rating)
            FROM customer_reviews AS cr
            WHERE cr.truck_id = ?),
          'customerRatings', (SELECT 
            json_agg(json_build_object(
              'username', username,
              'starRating', customer_rating,
              'review', customer_review))
            FROM customer_reviews AS cr
            JOIN users AS u
              ON cr.user_id = u.user_id
            WHERE cr.truck_id = ?),
          'arrivalTime', arrival_time,
          'arrivalDate', arrival_date,
          'departureTime', departure_time,
          'departureDate', departure_date,
          'menu', (SELECT
            json_agg(json_build_object(
              'itemName', mi.item_name,
              'itemDescription', mi.item_description,
              'itemPrice', mi.item_price,
              'itemPhotos', (SELECT
                json_agg(json_build_object(
                  'menuItemPhotoId', menu_item_photo_id,
                  'menuItemPhotoUrl', menu_item_photo_url))
                FROM menu_item_photos AS mip
                JOIN menu_items AS mi
                  ON mip.menu_item_id = mi.menu_item_id
                WHERE mi.menu_item_id = tm.menu_item_id
                )))
            FROM trucks AS tr
            JOIN truck_menu AS tm
              ON tr.truck_id = tm.truck_id
            JOIN menu_items AS mi
              ON tm.menu_item_id = mi.menu_item_id
            WHERE tr.truck_id = ?)
        )`,
        [truck_id, truck_id, truck_id, truck_id, truck_id, truck_id, truck_id]
      )
    )
    .where('truck_id', truck_id)
    .first()
  return foundTruck.json_build_object
}

async function getTruckRatings(truck_id) {
  const ratings = await db('customer_reviews as cr')
    .select('username', 'customer_rating', 'customer_review')
    .where('cr.truck_id', truck_id)
    .join('users as u', 'u.user_id', 'cr.user_id')
  const { avg } = await db('customer_reviews as cr')
    .avg('customer_rating')
    .where('cr.truck_id', truck_id)
    .first()
  return {
    customerRatingAvg: Number(Number(avg).toFixed(1)),
    customerRatings: ratings.map((rev) => {
      return {
        username: rev.username,
        starRating: rev.customer_rating,
        review: rev.customer_review
      }
    })
  }
}

module.exports = {
  getAllTrucks,
  getTruckByExtId,
  getTruckId,
  getTruckRatings
}
