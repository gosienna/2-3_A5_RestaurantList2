const mongoose = require('mongoose')
//load mongoose database api
const restaurant_model = require('../restaurant_model')
//load seed data
const raw = require('./restaurant_seed.json')
const restaurantList_seed = raw.results
console.log(restaurantList_seed)
mongoose.connect('mongodb://localhost/RestaurantList', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  restaurantList_seed.forEach(element => {
    restaurant_model.create({  
        "id": element.id,
        "name": element.name,
        "name_en": element.name_en,
        "category": element.category,
        "image": element.image,
        "location": element.location,
        "phone": element.phone,
        "google_map": element.google_map,
        "rating": element.rating,
        "description": element.description })
  });
})