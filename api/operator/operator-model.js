const db = require('../../data/db-config')

async function getOpTrucks(operatorId) {
  const trucks = await db('trucks as mti')
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
          WHERE truck_id = mti.truck_id),
        'currentGpsLocation', (SELECT
          json_build_object(
            'latitude', truck_latitude,
            'longitude', truck_longitude)
          FROM trucks
          WHERE truck_id = mti.truck_id),
        'truckImages', (SELECT
          json_agg(json_build_object(
              'truckPhotoId', truck_photo_id,
              'truckPhotoUrl', truck_photo_url))
          FROM trucks AS tr
          JOIN truck_photos AS tp
            ON tr.truck_id = tp.truck_id
          WHERE tr.truck_id = mti.truck_id),
        'cuisineTypes', (SELECT
          json_agg(json_build_object(
            'cuisineTypeId', ct.cuisine_type_id,
            'cuisineTypeName', ct.cuisine_type_name))
          FROM trucks AS tr
          JOIN truck_cuisines AS tc 
            ON tr.truck_id = tc.truck_id
          JOIN cuisine_types AS ct
            ON tc.cuisine_type_id = ct.cuisine_type_id
          WHERE tr.truck_id = mti.truck_id),
        'customerRatingAvg', (SELECT
          avg(customer_rating)
          FROM customer_reviews AS cr
          WHERE cr.truck_id = mti.truck_id),
        'customerRatings', (SELECT 
          json_agg(json_build_object(
            'username', username,
            'starRating', customer_rating,
            'review', customer_review))
          FROM customer_reviews AS cr
          JOIN users AS u
            ON cr.user_id = u.user_id
          WHERE cr.truck_id = mti.truck_id),
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
          WHERE tr.truck_id = mti.truck_id)
      )) as trucksOwned`
      )
    )
    .as('trucksOwned')
    .where('mti.user_id', operatorId)
    .first()
  return trucks
}

module.exports = {
  getOpTrucks
}
