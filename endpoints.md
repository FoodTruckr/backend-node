something.heroku.com/api/diner/:id

singleTruck: {
truckId: 1,
truckName: 'Mother Trucker',
currentLocation: 'Hudson Yards',
imageOfTruck:
'https://www.bangkokexpatlife.com/wp-content/uploads/2015/07/mother-trucker-food-truck-in-bangkok.jpg',
cuisineTypes: ['American', 'Mexican', 'Tex-Mex'],
customerRatingAvg: 4.5,
customerRatings: [{ username: 'Shrek', starRatings: 5 }],
arrivalTime: '7AM',
arrivalDate: '03/30/2021',
departureTime: '5PM',
departureDate: '03/30/2021',
menu: [
{
itemName: 'fajita',
itemDescription: 'juicy and nice',
itemPrice: '$4.20',
itemPhotoUrl:
'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2015/10/fajita-inspired-wraps-35-of-50.jpg',
},
],
}

// [GET] diner (/api/diner)
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
cuisineTypes: [cuisine names], //all info
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

// [GET] Get all menu item (/api/operator/:id/menu)
//Dont need
[{
itemId,
itemName,
itemDescription,
itemPrice,
itemPhoto
}]

//[GET] retrieve all cuisineTypes (/api/operator/cuisines)
[{
cuisineTypeId,
cuisineTypeName
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
userId,
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

Array of all ratings

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

// [POST] new menu item (api/operator/:id/menu/)
{
itemName,
itemDescription,
itemPrice,
itemPhoto
}

// response (all menu items, including the new one)

[{
itemId,
itemName,
itemDescription,
itemPrice,
itemPhoto
}]

//[POST] create new cuisineType (/api/operator/:operatorId/cuisines)
{
cuisineTypeName
}
//response (all cuisines, including the new one):
[{
cuisineTypeId,
cuisineTypeName
}]

// [PUT] edit menu item (api/operator/:id/menu/:itemId)
{
itemName,
itemDescription,
itemPrice,
itemPhoto
}

// response (all menu items, including the edited one)
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
new avg
all ratings of truck

//[PUT] edit cuisineType (/api/operator/:operatorId/cuisines/:cuisineTypeId)
{
cuisineTypeName
}
//response (all cuisines, including the edited one):
[{
cuisineTypeId,
cuisineTypeName
}]

// [DELETE] diner favorite truck (/api/diner/:id/favorites)
{
truckId
}

//response (the still favorited trucks)
[{
truckId,
truckName
}]

// [DELETE] truck (api/operator/:id/:truckId/)

//response
[{
truckId,
truckName
}]

// [DELETE] delete menu item (api/operator/:id/menu/:itemId)

//response (the remaing operator's menu items)
[{
itemId,
itemName,
itemDescription,
itemPrice,
itemPhoto
}]

// [DELETE] diner rating of truck (/api/diner/:id/ratings)

{
truckId,
}
//response
new updated
full array or ratings

//[DELETE] delete cuisineType (/api/operator/:operatorId/cuisines/:cuisineTypeId)
//response (the non-removed cuisines):
[{
cuisineTypeId,
cuisineTypeName
}]

//![POST] diner search (/api/trucks/)
TBD
