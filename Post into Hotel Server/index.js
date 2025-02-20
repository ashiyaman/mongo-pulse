const mongoose = require("mongoose")
const Hotels = require("./models/Hotels.models")
const express = require('express')

const {initializeDatabase} = require("./db/db.connect")
const app = express()

app.use(express.json())
initializeDatabase()

app.get('/', (req, res) => {
    res.send('Welcome to Hotel Server.')
})

  async function createHotel(newHotel) {
    try{
        const hotel = new Hotels(newHotel)
        const saveHotel = await hotel.save()
        console.log("Hotel saved")
    } 
    catch(error){
        throw error
    }
}

app.post('/hotels', async (req, res) => {
    try{
        const saveHotel = await createHotel(req.body)
        res.status(200).json({message: 'New hotel added successfully', hotel: saveHotel})
    }
    catch{
        res.status(500).json({error: 'Failed to add Hotel.'})
    }
})

app.get('/', (req, res) => {
    res.send('Welcome to Hotel Server.')
})

//Get all the hotels from database

const readAllHotels = async() => {
    try{
        const hotels = await Hotels.find()
        console.log(hotels)
        return hotels
    }
    catch(error){
        throw error
    }
}

app.get('/hotels', async(req, res) => {
    try{
        const hotels = await readAllHotels()
        console.log(hotels)
        if(hotels){
            res.send(hotels)
        }
        else{
            res.status(404).json({error: 'Hotel not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetcing Hotel.'})
    }
})

//Get a hotel with a particular name

const readHotelByName = async(hotelName) => {
    try{
        const hotel = await Hotels.findOne({name: hotelName})
        console.log(hotel)
        return hotel
    }
    catch(error){
        throw error
    }
}

app.get('/hotels/:hotelName', async(req, res) => {
    try{
        const hotel = await readHotelByName(req.params.hotelName)
        console.log(hotel)
        if(hotel){
            res.send(hotel)
        }
        else{
            res.status(404).json({error: 'Hotel not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetcing Hotel.'})
    }
})

//Get a hotel by a particlar category

const readHotelByCategory = async(hotelCategory) => {
    try{
        const hotel = await Hotels.findOne({category: hotelCategory})
        console.log(hotel)
        return hotel
    }
    catch(error){
        throw error
    }
}

app.get('/hotels/category/:hotelCategory', async(req, res) => {
    try{
        const hotel = await readHotelByCategory(req.params.hotelCategory)
        console.log(hotel)
        if(hotel){
            res.send(hotel)
        }
        else{
            res.status(404).json({error: 'Hotel not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetcing Hotel.'})
    }
})

//Get all hotels with particular rating

const readHotelsByRating = async(rating) => {
    try{
        const hotels = await Hotels.find({rating: rating})
        return hotels
    }
    catch(error){
        throw error
    }
}

app.get('/hotels/rating/:hotelRating', async(req, res) => {
    try{
        const hotel = await readHotelsByRating(req.params.hotelRating)
        console.log(hotel)
        if(hotel){
            res.send(hotel)
        }
        else{
            res.status(404).json({error: 'Hotel not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetcing Hotel.'})
    }
})

//Get all hotels with particular phone no.

const readHotelByPhoneNumber = async(phoneNumber) => {
    try{
        const hotels = await Hotels.findOne({phoneNumber: phoneNumber})
    }
    catch(error){
        throw error
    }
}

app.get('/hotels/directory/:phoneNumber', async(req, res) => {
    try{
        const hotel = await readHotelByPhoneNumber(req.params.phoneNumber)
        console.log(hotel)
        if(hotel){
            res.send(hotel)
        }
        else{
            res.status(404).json({error: 'Hotel not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error while fetcing Hotel.'})
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})