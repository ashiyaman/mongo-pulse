const mongoose = require("mongoose")

const cardSchema = new mongoose.Schema({
    name: String,
    fruitImageUrl: String,
    description: String,
    calories: Number,
    carbs: Number,
    protein: Number,
    fats: Number
})

const Card = mongoose.model("Card", cardSchema)

module.exports = Card