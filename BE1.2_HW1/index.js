const {initializeDatabase} = require("./db/db.connect")
const fs = require("fs")
const Profile = require("./models/twitter.models")

initializeDatabase()
const jsonData = fs.readFileSync("./profiles.json", "utf-8")
const userProfilesData = JSON.parse(jsonData)

const seedData = () => {
    try{
        for(const userProfileData of userProfilesData){
            const newUserProfile = new Profile({
                fullName: userProfileData.fullName,
                username: userProfileData.username,
                bio: userProfileData.bio,
                profilePicUrl: userProfileData.profilePicUrl,
                followingCount: userProfileData.followingCount,
                followerCount: userProfileData.followerCount,
                companyName: userProfileData.companyName,
                location: userProfileData.location,
                portfolioUrl: userProfileData.portfolioUrl
            })
            newUserProfile.save()
        }
    }
    catch(error){
        console.log("Error sending data to database", error)
    }
}

seedData()