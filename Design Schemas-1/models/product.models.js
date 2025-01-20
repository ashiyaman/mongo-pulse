const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    productImageurl: String,
    productinfo: String,
    color: {
        type: String,
        enum: ["blue", "red", "green", "orange", "grey"]
    },
    size: {
        type: Number,
        enum: [7, 8, 9, 10, 11]
    },
    tag: [{
        type: String
    }],
    price: Number
})

const Product = mongoose.model("product")

module.exports = Product