const mongoose = require("mongoose")

const productCard = new mongoose.Schema({
    name: String,
    productImageURl: String,
    price: Number,
    tags: [String],
    stars: Number,
    ratings: Number,
    reviews: Number,
    description: [String],
    isFlipkartAssured: {
        type: Boolean,
        default: true
    }
})

const ProductCard = mongoose.model("ProductCard", productCard)

module.exports = ProductCard