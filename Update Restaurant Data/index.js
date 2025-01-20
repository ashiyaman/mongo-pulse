const mongoose = require("mongoose")
const Restaurants = require("./models/restaurants.models")

const {initializeDatabase} = require("./db/db.connect")
initializeDatabase()

/*const newRestaurant = {
    name: "Cha Cha",
    cuisine: ["Spanish"],
    location: "123 Main Street, Anytown",
    rating: 4.0,
    reviews: [],
    website: "https://example.com",
    phoneNumber: "+1234567890",
    openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
    priceRange: "$$ (11-30)",
    reservationsNeeded: true,
    isDeliveryAvailable: true,
    menuUrl: "https://example.com/menu",
    photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  };*/

  /*const newRestaurant = {
    name: "Somi",
    cuisine: ["Greek"],
    location: "11 Main Road, Gem",
    rating: 4.3,
    reviews: [],
    website: "https://somi-example.com",
    phoneNumber: "+1234997390",
    openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
    priceRange: "$$ (11-30)",
    reservationsNeeded: false,
    isDeliveryAvailable: true,
    menuUrl: "https://somi-example.com/menu",
    photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
  };*/

  const newRestaurant = {
    name: "Yo China",
    cuisine: ["Chinese", "Italian"],
    location: "MG Road, Bangalore",
    rating: 3.9,
    reviews: [],
    website: "https://yo-example.com",
    phoneNumber: "+1288997392",
    openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isDeliveryAvailable: false,
    menuUrl: "https://yo-example.com/menu",
    photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
  };

  //Save new restaurant to database

  async function createRestaurant(newRestaurant) {
    try{
        const restaurant = new Restaurants(newRestaurant)
        await restaurant.save()
        console.log("Restaurant saved")
    } 
    catch(error){
        throw error
    }
}

//createRestaurant(newRestaurant)

//Get all the restaurants from database

const readAllRestaurants = async() => {
    try{
        const restaurants = await Restaurants.find()
        console.log(restaurants)
    }
    catch(error){
        throw error
    }
}

//readAllRestaurants()

//Get a restauant with a particular name

const readRestaurantByName = async(restaurantName) => {
    try{
        const restaurant = await Restaurants.findOne({name: restaurantName})
        console.log(restaurant)
    }
    catch(error){
        throw error
    }
}

//readRestaurantByName("Somi")

//Get all restaurants which has reservations

const readAllRestaurantsWithReservation = async() => {
    try{
        const restaurantsWithReservation = await Restaurants.find({reservationsNeeded: true})
        console.log(restaurantsWithReservation)
    }
    catch(error){
        throw error
    }
}

//readAllRestaurantsWithReservation()

//Get all restaurants which has delivery

const readAllRestaurantsWithDelivery = async() => {
    try{
        const restaurantsWithDelivery = await Restaurants.find({isDeliveryAvailable: true})
        console.log(restaurantsWithDelivery)
    }
    catch(error){
        throw error
    }
}

//readAllRestaurantsWithDelivery()

//Get a restaurant by a particlar phone no.

const readRestaurantByPhoneNo = async(restaurantPhoneNumber) => {
    try{
        const restaurant = await Restaurants.findOne({phoneNumber: restaurantPhoneNumber})
        console.log(restaurant)
    }
    catch(error){
        throw error
    }
}

//readRestaurantByPhoneNo("+1288997392")

//Get all restaurants with particular cuisine

const readAllRestaurantsByCuisine = async(cuisine) => {
    try{
        const restaurant = await Restaurants.find({cuisine: cuisine})
        console.log(restaurant)
    }
    catch(error){
        throw error
    }
}

//readAllRestaurantsByCuisine("Italian")

//update restaurant data

const updateRestaurant = async(restaurantId, dataToUpdate) => {
    try{
       const updatedRestaurant = await Restaurants.findByIdAndUpdate(restaurantId, dataToUpdate, {new: true})
       console.log(updatedRestaurant)
    }
    catch(error){
        throw error
    }
}

//updateRestaurant('6780b9585fdbfa36b8364ceb', {rating: 4.1})

//Find a restaurant and update its value

const updateRestaurantDetail = async(restaurantName, dataToUpdate) => {
    try{
        const updatedRestaurant = await Restaurants.findOneAndUpdate({name: restaurantName}, dataToUpdate, {new: true})
        console.log(updatedRestaurant)
    }
    catch(error){
        throw error
    }
}

//updateRestaurantDetail("Somi", {name: "Som Sarovar"})

//Find a restaurant by phone no and update its value

const updateRestaurantDelivery = async(phoneNumber, dataToUpdate) => {
    try{
        const updatedRestaurant = await Restaurants.findOneAndUpdate({phoneNumber: phoneNumber}, dataToUpdate, {new: true})
        console.log(updatedRestaurant)
    }
    catch(error){
        throw error
    }
}

updateRestaurantDelivery("+1288997392", {isDeliveryAvailable: true})