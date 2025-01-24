const mongoose = require("mongoose")
const Restaurants = require("./models/restaurants.models")
const express = require('express')

const {initializeDatabase} = require("./db/db.connect")

const app = express()

app.use(express.json())
initializeDatabase()

//Get all the restaurants from database

const readAllRestaurants = async() => {
    try{
        const restaurants = await Restaurants.find()
        console.log(restaurants)
        return restaurants
    }
    catch(error){
        throw error
    }
}

app.get('/restaurants', async (req, res) => {
    try{
        const restaurants = await readAllRestaurants()
        res.send(restaurants)
    }
    catch{
        res.status(500).json({error: 'Error while fetching restaurants.'})
    }
})

//Get a restauant with a particular name

const readRestaurantByName = async(restaurantName) => {
    try{
        const restaurant = await Restaurants.findOne({name: restaurantName})
        
    }
    catch(error){
        throw error
    }
}

app.get('/restaurants/:restaurantName', async (req, res) => {
    try{
        const restaurant = await readRestaurantByName(req.params.restaurantName)
        console.log(restaurant)
        if(restaurant){
            res.send(restaurant)
        }
        else{
            res.status(404).json({error: 'Restaurant not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetching restaurant.'})
    }
})

//Get a restaurant by a particlar phone no.

const readRestaurantByPhoneNo = async(restaurantPhoneNumber) => {
    try{
        const restaurant = await Restaurants.findOne({phoneNumber: restaurantPhoneNumber})
        return restaurant
    }
    catch(error){
        throw error
    }
}

app.get('/restaurants/directory/:phoneNumber', async (req, res) => {
    try{
        const restaurant = await readRestaurantByPhoneNo(req.params.phoneNumber)
        console.log(restaurant)
        if(restaurant){
            res.send(restaurant)
        }
        else{
            res.status(404).json({error: 'Restaurant not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetching restaurant.'})
    }
})

//Get all restaurants with particular cuisine

const readAllRestaurantsByCuisine = async(cuisine) => {
    try{
        const restaurant = await Restaurants.find({cuisine: cuisine})
        console.log(restaurant)
        return restaurant
    }
    catch(error){
        throw error
    }
}

app.get('/restaurants/cuisine/:cuisineName', async (req, res) => {
    try{
        const restaurant = await readAllRestaurantsByCuisine(req.params.cuisineName)
        console.log(restaurant)
        if(restaurant){
            res.send(restaurant)
        }
        else{
            res.status(404).json({error: 'Restaurant not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetching restaurant.'})
    }
})

//Get all restaurants with particular location

const readAllRestaurantsByLocation = async(location) => {
    try{
        const restaurant = await Restaurants.find({location: location})
        console.log(restaurant)
        return restaurant
    }
    catch(error){
        throw error
    }
}

app.get('/restaurants/location/:restaurantLocation', async (req, res) => {
    try{
        const restaurant = await readAllRestaurantsByLocation(req.params.restaurantLocation)
        console.log(restaurant)
        if(restaurant){
            res.send(restaurant)
        }
        else{
            res.status(404).json({error: 'Restaurant not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetching restaurant.'})
    }})

const PORT = 3000
app.listen(PORT, () => {
    console.log('App running on port', PORT)
})

