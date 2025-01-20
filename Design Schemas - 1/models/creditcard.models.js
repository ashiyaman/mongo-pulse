const mongoose = require("mongoose")

const creditCardSchema = new mongoose.Schema({
    bankName: String,
    accountHolderName: String,
    cardNumber: Number,
    expiryDate: Date,
    bankImageURL: String
})

const CreditCard = mongoose.model("CreditCard", creditCardSchema)

module.exports = CreditCard