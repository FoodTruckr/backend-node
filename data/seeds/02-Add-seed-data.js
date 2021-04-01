exports.seed = async function (knex) {
  await knex('users').insert([
    {
      user_external_id: 'bF6SsD',
      username: 'batman',
      password: '$2y$08$D8QvTr88zGqyxT/qPcR3beOrvRJqy1UCawwTW/zbO9uRbojp/OAji', // batman123
      role: 'operator'
    },
    {
      user_external_id: 'FjHUzO',
      username: 'robin',
      password: '$2y$08$DPnNvuwB75oZGK0YbUq4Neq63MCJ.KDJgB4Q7h.t4JXfnCO4G4.Ve', // robin123
      role: 'diner'
    }
  ])
  await knex('emails').insert([
    {
      email: 'batman@batman.com',
      user_id: 1
    },
    {
      email: 'robin@batman.com',
      user_id: 2
    }
  ])
  await knex('trucks').insert([
    {
      truck_external_id: 'zmkJne',
      truck_name: 'Mother Trucker',
      user_id: 1,
      truck_latitude: null,
      truck_longitude: null,
      address: 'Gotham Yards',
      city: 'Gotham',
      state: 'NY',
      zip_code: 89115,
      arrival_date: null,
      arrival_time: null,
      departure_date: 'July 4, 2021',
      departure_time: '9:00 pm est'
    },
    {
      truck_external_id: 'Sz1XKx',
      truck_name: 'Mad Mex',
      user_id: 1,
      truck_latitude: null,
      truck_longitude: null,
      address: '1963 St. Gotham Dr.',
      city: 'Las Vegas',
      state: 'NV',
      zip_code: 89112,
      arrival_date: 'June 1, 2021',
      arrival_time: '11:45am pst',
      departure_date: 'July 4, 2021',
      departure_time: '9:00 pm est'
    }
  ])
  await knex('favorite_trucks').insert([
    {
      user_id: 2,
      truck_id: 1
    },
    {
      user_id: 2,
      truck_id: 2
    }
  ])
  await knex('customer_reviews').insert([
    {
      user_id: 2,
      truck_id: 1,
      customer_rating: 5,
      customer_review: 'Best Food truck ever!'
    },
    {
      user_id: 2,
      truck_id: 2,
      customer_rating: 1,
      customer_review: 'Worst Food truck ever!'
    }
  ])
  await knex('cuisine_types').insert([
    {
      cuisine_type_name: 'American',
      user_id: 1
    },
    {
      cuisine_type_name: 'Mexican',
      user_id: 1
    },
    {
      cuisine_type_name: 'Tex-Mex',
      user_id: 1
    }
  ])
  await knex('truck_cuisines').insert([
    {
      truck_id: 1,
      cuisine_type_id: 1
    },
    {
      truck_id: 1,
      cuisine_type_id: 2
    },
    {
      truck_id: 1,
      cuisine_type_id: 3
    },
    {
      truck_id: 2,
      cuisine_type_id: 3
    }
  ])
  await knex('truck_photos').insert([
    {
      truck_id: 1,
      truck_photo_url:
        'https://www.bangkokexpatlife.com/wp-content/uploads/2015/07/mother-trucker-food-truck-in-bangkok.jpg'
    },
    {
      truck_id: 1,
      truck_photo_url:
        'https://www.ryoiireview.com/upload/editor_review/201512/1450756757_620-001.jpg'
    },
    {
      truck_id: 2,
      truck_photo_url:
        'https://i.pinimg.com/originals/4b/70/50/4b7050f3c5c2243ff9098e6399c5a7f2.png'
    }
  ])
  await knex('menu_items').insert([
    {
      user_id: 1,
      item_name: 'Fajita',
      item_description: 'juicy and nice',
      item_price: 4.2
    },
    {
      user_id: 1,
      item_name: 'Double Fajita',
      item_description: 'Our beloved fajitas... but double!',
      item_price: 7.99
    },
    {
      user_id: 1,
      item_name: 'Tacos Platter Max',
      item_description: 'Giant, Fresh and spicy',
      item_price: 8.2
    },
    {
      user_id: 1,
      item_name: 'Tacos for Kids',
      item_description: 'Fresh, with a mild heat level',
      item_price: 3.95
    }
  ])
  await knex('menu_item_photos').insert([
    {
      menu_item_id: 1,
      menu_item_photo_url:
        'https://i2.wp.com/gimmedelicious.com/wp-content/uploads/2015/10/fajita-inspired-wraps-35-of-50.jpg'
    },
    {
      menu_item_id: 2,
      menu_item_photo_url:
        'https://thedizzycook.com/wp-content/uploads/2019/02/Steak-Fajitas-Easy.jpg'
    },
    {
      menu_item_id: 1,
      menu_item_photo_url:
        'https://i2.wp.com/www.mygorgeousrecipes.com/wp-content/uploads/2016/03/Mexican-chicken-fajitas.jpg'
    },
    {
      menu_item_id: 3,
      menu_item_photo_url:
        'http://hostthetoast.com/wp-content/uploads/2017/05/Slow-Cooker-Spicy-Shredded-Mexican-Chicken-6.jpg'
    },
    {
      menu_item_id: 4,
      menu_item_photo_url:
        'https://pixfeeds.com/images/recipes/fast-food/1280-172857632-taco.jpg'
    }
  ])
  await knex('truck_menu').insert([
    {
      menu_item_id: 1,
      truck_id: 1
    },
    {
      menu_item_id: 2,
      truck_id: 1
    },
    {
      menu_item_id: 3,
      truck_id: 1
    },
    {
      menu_item_id: 4,
      truck_id: 1
    },
    {
      menu_item_id: 1,
      truck_id: 2
    },
    {
      menu_item_id: 4,
      truck_id: 2
    }
  ])
}
