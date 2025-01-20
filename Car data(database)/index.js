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

//seedData()

//Create a new car dat ainto database

/*const carData = {
    brand: "Ford",
    model: "Mustang",
    year: 2019,
    bodyStyle: "Convertible",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    mileage: 25000,
    color: "Red",
    price: 3500000,
    condition: "Used",
    description: "Exciting Ford Mustang convertible with powerful V8 engine.",
    photos: [
      "https://example.com/mustang-photo1.jpg",
      "https://example.com/mustang-photo2.jpg",
      "https://example.com/mustang-photo3.jpg"
    ]
  };*/

  const carData = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    transmission: "Manual",
    engine: "1.5L Turbocharged Inline-4",
    mileage: 40000,
    color: "Black",
    price: 1800000,
    condition: "Used",
    description: "Sporty Civic coupe with low mileage and manual transmission.",
    photos: [
      "https://example.com/civic-photo1.jpg",
      "https://example.com/civic-photo2.jpg",
      "https://example.com/civic-photo3.jpg"
    ]
  };

  const createCar = async(newCar) => {
    try{
        const car = new Car(newCar)
        await car.save()
        console.log(car)
    }
    catch(error){
        throw error
    }
  }

  //createCar(carData)

  //Read all cars from db

  const readAllCars = async() => {
    try{
        const cars = await Car.find()
        console.log(cars)
    }
    catch(error){
        throw error
    }
  }

  //readAllCars()

  //Read car by brand

  const readCarByBrand = async(carBrand) => {
    try{
        const car = await Car.find({brand: carBrand})
        console.log(car)
    }
    catch(error){
        throw error
    }
  }

  ///readCarByBrand("Ford")

   //Read car by color

   const readCarByColor = async(color) => {
    try{
        const car = await Car.find({color: color})
        console.log(car)
    }
    catch(error){
        throw error
    }
  }

  //readCarByColor("Black")

  //Update car price

  const updateCarPrice = async(carModel, dataToUpdate) => {
    try{
      const car = await Car.findOneAndUpdate({model: carModel}, dataToUpdate)
      console.log(car)
    }
    catch(error){
      throw error
    }
  }

  updateCarPrice("Corolla", {price: "230000"})

    //Update car condition

    const updateCarCondition = async(carModel, dataToUpdate) => {
      try{
        const car = await Car.findOneAndUpdate({model: carModel}, dataToUpdate)
        console.log(car)
      }
      catch(error){
        throw error
      }
    }
  
    updateCarPrice("Model S", {condition: "Used"})

    //Find and delete car by id

const deleteCarById = async(carId) => {
  try{
      const deletedCar = await Car.findByIdAndDelete(carId)
      console.log(deletedCar)
  }
  catch(error){
      throw error
  }
}

deleteHotelById("6780c40871cec1bc7ccfd3d9")

//Find hotel and delete from db

const deleteCarByBody  = async(carBody) => {
  try{
      const deletedCar = await Car.findOneAndDelete({carBody: carBody})
      console.log(deletedCar)
  }
  catch(error){
      throw error
  }
}

deleteCarByBody("Coupe")

