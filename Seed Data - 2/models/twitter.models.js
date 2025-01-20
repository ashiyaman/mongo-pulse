const mongoose = require("mongoose")

const twitterSchema = new mongoose.Schema({
    profilePicUrl: String,
    fullName: String,
    username: String,
    bio: String,
    companyName: String,
    location: String,
    portfolioUrl: String,
    handle: String,
    followerCount: Number,
    followingCount: Number,
    isOnline: Boolean
})

const Twitter = mongoose.model("Twitter", twitterSchema)

module.exports = Twitter