something.heroku.com/api/diner/:id

//GET diner (/api/diner/:id)
{
  userId,
  username,
  favoriteTrucks: [{
    truckId,
    truckName
  }]
}

// [GET] operator (/api/operator/:id)
{
  userId,
  username,
  trucksOwned: [{
    truckId,
    truckName
  }]
}

//[GET] individual truck (/api/trucks/:id)
{
  truckId,
  truckName,
  currentLocation,
  imageOfTruck,
  cuisineTypes: [cuisine names],
  customerRatingAvg,
  customerRatings: [{username, starratings}],
  arrivalTime,
  arrivalDate,
  departureTime,
  departureDate
  menu: [{
    itemName,
    itemDescriptionm
    itemPrice,
    itemPhotoUrl
  }]
}

// add menu table

// [GET] all trucks (/api/trucks)

[{
  truckId,
  truckName,
  imageOfTruck
  customerRatingAvg,
  cuisineTypes
}]

// [POST] new diner/operator (/api/auth/new)
//receive:

{
  username,
  password,
  role,
  email
}

// return

{
  userId,
  username
}

// [POST] Login (/api/auth/login)
//receive
{
  username,
  password
}

return {
  user_id,
  username,
  role,
  email,
  token  
}

// [POST] Add favorite truck(/api/diner/:id/favorites)
//request
{
  truckId
}

//response 
[{
  truckId,
  truckName
}]

//[POST] customer rating (/api/diner/:id/ratings)

{
  truckId,
  rating
}
//response
Ok

//[POST] operator new truck (api/operator/:id/)
{
  truckName,
  imageOfTruck,
  cuisineTypes: [cuisine names]
}

//response 
[{
  truckId,
  truckName
}]

// [POST] new menu item (api/operator/:id/:truckId/)
{
  itemName,
  itemDescription,
  itemPrice,
  itemPhoto
}

// response

[{
  itemId,
  itemName,
  itemDescription,
  itemPrice,
  itemPhoto
}]

// [PUT] edit menu item (api/operator/:id/:truckId/:itemId)
  {
    itemName,
    itemDescription,
    itemPrice,
    itemPhoto
  }

// response
[{
  itemId,
  itemName,
  itemDescription,
  itemPrice,
  itemPhoto
}]

// [PUT] edit truck info (api/operator/:id/:truckId/)
{
  truckName,
  currentLocation,
  imageOfTruck,
  cuisineTypes: [cuisine names],
  arrivalTime,
  arrivalDate,
  departureTime,
  departureDate
}

// [PUT] edit diner rating of truck (/api/diner/:id/ratings)

{
  truckId,
  rating
}
//response
Ok

// [DELETE] diner favorite truck (/api/diner/:id/favorites)
{
  truckId
}

//response
[{
  [{
    truckId,
    truckName
  }]
}]


// [DELETE] truck (api/operator/:id/:truckId/)

//response
[{
  truckId,
  truckName
}]

// [DELETE] delete menu item (api/operator/:id/:truckId/:itemId)

//response
[{
  itemId,
  itemName,
  itemDescription,
  itemPrice,
  itemPhoto
}]

// [DELETE]  diner rating of truck (/api/diner/:id/ratings)

{
  truckId,
}
//response
Ok


//[GET] retrieve all cuisineTypes (/api/cuisines)
[{
  cuisineTypeId,
  cuisineTypeName
}]

//[POST] create new cuisineType (/api/cuisines)
{
 cuisineTypeName
}
//response (all cuisines, including the new one):
[{
  cuisineTypeId,
  cuisineTypeName
}]

//[PUT] edit cuisineType (/api/cuisines/:cuisineTypeID)
{
 cuisineTypeName
}
//response (all cuisines, including the edited one):
[{
  cuisineTypeId,
  cuisineTypeName
}]

//[DELETE] delete cuisineType (/api/cuisines/:cuisineTypeID)
//response (the non-removed cuisines):
[{
  cuisineTypeId,
  cuisineTypeName
}]

//![POST] diner search (/api/trucks/) 
TBD
