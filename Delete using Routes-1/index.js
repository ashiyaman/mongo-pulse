const express = require("express")
const app = express()

app.use(express.json())

const cars = [
    {id: 1, make: "Toyota", model: "Camry", year: 2022},
    {id: 2, make: "Honda", model: "Civic", year: 2022},
    {id: 3, make: "Ford", model: "Mustang", year: 2022},
    {id: 4, make: "Tesla", model: "Model 3", year: 2022},
    {id: 5, make: "Audi", model: "A 4", year: 2022},
    {id: 6, make: "Kia", model: "Seltos", year: 2022},
    {id: 8, make: "Volkswagen", model: "Polo", year: 2022},
    {id: 9, make: "Hyundai", model: "Tuscan", year: 2022},
    {id: 10, make: "Mercedes-Benz", model: "C-Class", year: 2022},
    {id: 11, make: "Nissan", model: "Altima", year: 2022},
    {id: 12, make: "BMW", model: "X5", year: 2022},
]

app.get("/", (req, res) => {
    res.send("Hello, Express.")
})

app.post("/cars", (req, res) => {
    const newCar = req.body

    if(!newCar.make || !newCar.model || !newCar.year){
        res.status(400).json({error: "Make, model and year are required"})
    }
    else{
        cars.push(newCar)
        res.status(201).json({message: "Car added successfully", car: newCar})
    }
})

app.get("/cars", (req, res) => {
    res.send(cars)
})

app.delete("/cars/:id", (req, res) => {
    const carId = parseInt(req.params.id)

    const index = cars.findIndex((car) => car.id === carId)

    if(index === -1){
        res.status(404).json({error: "Car Not Found"})
    }
    else{
        cars.splice(index, 1)
        res.status(200).json({message: "Car deleted Successfully."})
    }
})

app.post("/cars/:id", (req, res) => {
    const carId = parseInt(req.params.id)
    const updatedCarData = req.body
    res.json({message: updatedCarData})

    const carToUpdate = cars.find((car) => car.id === carId)
    if(!carToUpdate){
        res.status(404).json({error: "Car not Found"})
    }
    else{
        if(!updatedCarData.make || updatedCarData.model || !updatedCarData.year){
            res.status(400).json({error: "Car make, model and year are required."})
        }
        else {
            Object.assign(carToUpdate, updatedCarData)
            res.status(200).json({message: "Car data updated successfully", car: carToUpdate})
        }
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})