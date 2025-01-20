const mongoose = require("mongoose")
const Hotels = require("./models/Hotels.models")

const {initializeDatabase} = require("./db/db.connect")
initializeDatabase()

/*const newHotel = {
    name: "New Hotel",
    category: "Mid-Range",
    location: "123 Main Street, Frazer Town",
    rating: 4.0,
    reviews: [],
    website: "https://hotel-example.com",
    phoneNumber: "+1234567890",
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    amenities: ["Laundry", "Room Service"],
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: true,
    photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
  };*/

  /*const newHotel = {
    name: "Lake View",
    category: "Mid-Range",
    location: "124 Main Street, Anytown",
    rating: 3.2,
    reviews: [],
    website: "https://lake-view-example.com",
    phoneNumber: "+1234555890",
    checkInTime: "2:00 PM",
    checkOutTime: "12:00 PM",
    amenities: ["Laundry", "Boating"],
    priceRange: "$$$ (31-60)",
    reservationsNeeded: true,
    isParkingAvailable: false,
    isWifiAvailable: true,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
  };*/

  const newHotel = {
    name: "Sunset Resort",
    category: "Resort",
    location: "12 Main Road, Anytown",
    rating: 4.0,
    reviews: [],
    website: "https://sunset-example.com",
    phoneNumber: "+1299655890",
    checkInTime: "2:00 PM",
    checkOutTime: "11:00 AM",
    amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
    priceRange: "$$$$ (61+)",
    reservationsNeeded: true,
    isParkingAvailable: true,
    isWifiAvailable: true,
    isPoolAvailable: true,
    isSpaAvailable: true,
    isRestaurantAvailable: true,
    photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
  };
  
  async function createHotel(newHotel) {
    try{
        const hotel = new Hotels(newHotel)
        await hotel.save()
        console.log("Hotel saved")
    } 
    catch(error){
        throw error
    }
}

//createHotel(newHotel)

//Get all the hotels from database

const readAllHotels = async() => {
    try{
        const hotels = await Hotels.find()
        console.log(hotels)
    }
    catch(error){
        throw error
    }
}

//readAllHotels()

//Get a hotel with a particular name

const readHotelByName = async(hotelName) => {
    try{
        const hotel = await Hotels.findOne({name: hotelName})
        console.log(hotel)
    }
    catch(error){
        throw error
    }
}

//readHotelByName("Lake View")

//Get all hotels which has parking space

const readAllHotelsWithParking = async() => {
    try{
        const hotelsWithParking = await Hotels.find({isParkingAvailable: true})
        console.log(hotelsWithParking)
    }
    catch(error){
        throw error
    }
}

//readAllHotelsWithParking()

//Get all hotels which has restaurant

const readAllHotelsWithRestaurant = async() => {
    try{
        const hotelsWithRestaurant = await Hotels.find({isRestaurantAvailable: true})
        console.log(hotelsWithRestaurant)
    }
    catch(error){
        throw error
    }
}

//readAllHotelsWithRestaurant()

//Get a hotel by a particlar category

const readHotelByCategory = async(hotelCategory) => {
    try{
        const hotel = await Hotels.findOne({category: hotelCategory})
        console.log(hotel)
    }
    catch(error){
        throw error
    }
}

//readHotelByCategory("Mid-Range")

//Get all hotels with particular price range

const readAllHotelsByPriceRange = async(priceRange) => {
    try{
        const hotel = await Hotels.find({priceRange: priceRange})
        console.log(hotel)
    }
    catch(error){
        throw error
    }
}

//readAllHotelsByPriceRange("$$$$ (61+)")

//Get all hotels with particular rating

const readHotelsByRating = async(rating) => {
    try{
        const hotels = await Hotels.find({rating: rating})
    }
    catch(error){
        throw error
    }
}

//readHotelsByRating(4)

//Get all hotels with particular phone no.

const readHotelByPhoneNumber = async(phoneNumber) => {
    try{
        const hotels = await Hotels.findOne({phoneNumber: phoneNumber})
    }
    catch(error){
        throw error
    }
}

//readHotelByPhoneNumber("+1299655890")

//update hotel data

const updateHotel = async(hotelId, dataToUpdate) => {
    try{
       const updatedHotel = await Hotels.findByIdAndUpdate(hotelId, dataToUpdate, {new: true})
       console.log(updatedHotel)
    }
    catch(error){
        throw error
    }
}

updateHotel('6780c40871cec1bc7ccfd3d9', {checkOutTime: "11:00 AM"})

//Find a hotel and update its value

const updateHotelDetail = async(hotelName, dataToUpdate) => {
    try{
        const updatedHotel = await Hotels.findOneAndUpdate({name: hotelName}, dataToUpdate, {new: true})
        console.log(updatedHotel)
    }
    catch(error){
        throw error
    }
}

updateHotelDetail("Sunset Resort", {rating: 4.2})

//Find a hotel by phone no and update its value

const updateHotelNo = async(phoneNumber, dataToUpdate) => {
    try{
        const updatedHotel = await Hotels.findOneAndUpdate({phoneNumber: phoneNumber}, dataToUpdate, {new: true})
        console.log(updatedHotel)
    }
    catch(error){
        throw error
    }
}

//updateHotelNo("+1299655890", {phoneNumber: "+1997687392"})

//Find and delete a hotel by id

const deleteHotelById = async(hotelId) => {
    try{
        const deletedHotel = await Hotels.findByIdAndDelete(hotelId)
        console.log(deletedHotel)
    }
    catch(error){
        throw error
    }
}

deleteHotelById("6780c40871cec1bc7ccfd3d9")

//Find hotel and delete from db

const deleteHotelByPhoneNumber  = async(hotelPhoneNumber) => {
    try{
        const deletedHotel = await Hotels.findOneAndDelete({phoneNumber: hotelPhoneNumber})
        console.log(deletedHotel)
    }
    catch(error){
        throw error
    }
}

deleteHotelByPhoneNumber("+1299655890")