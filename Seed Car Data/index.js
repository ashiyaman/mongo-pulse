const mongoose = require("mongoose")
const {initializeDatabase} = require("./db/db.connect")
const Car = require("./models/car.models")
const fs = require("fs")

initializeDatabase()
const jsonData = fs.readFileSync("./cars.json")
const CarsData = JSON.parse(jsonData)

const seedData = () => {
    try{
        for(const carData of CarsData){
            const newCar = Car({
                brand: carData.brand,
                model: carData.model,
                year: carData.year,
                bodyStyle: carData.bodyStyle,
                fuelType: carData.fuelType,
                transmission: carData.transmission,
                engine: carData.engine,
                mileage: carData.mileage,
                color: carData.color,
                price: carData.price,
                condition: carData.condition,
                description: carData.description,
                photos: carData.photos,
                inMarket: carData.inMarket
            })
            newCar.save()
        }
    }
    catch(error){
        console.log("Error sending data to database")
    }
}

seedData()
