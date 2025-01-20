const mongoose = require("mongoose")

const passcardSchema = new mongoose.Schema({
    idNo: Number,
    name : String,
    designation: String,
    prpfileImageUrl: String,
    dateOfBirth: Date,
    mail: {
        type: String,
        unique: true
    },
    telephoneNo: String,
    fullAddress: String
})

const EmployeePassCard = mongoose.model("EmployeePassCard", passcardSchema)

module.exports = EmployeePassCard