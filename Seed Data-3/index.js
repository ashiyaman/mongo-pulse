const mongoose = require("mongoose")
const fs = require("fs")
const {initializeDatabase} = require("./db/db.connect")
const Books = require("./models/books.models")

initializeDatabase()
const jsonData = fs.readFileSync("./books.json", "utf-8")
const BooksData = JSON.parse(jsonData)

const seedData = () => {
    try{
        for(const bookData of BooksData){
            const book = Books({
                title: bookData.title,
                author: bookData.author,
                publishedYear: bookData.publishedYear,
                genre: bookData.genre,
                language: bookData.language,
                country: bookData.country,
                rating: bookData.rating,
                summary: bookData.summary,
                coverImageUrl: bookData.coverImageUrl
            })
            book.save()
        }
    }
    catch(error){
        console.log("Error sending dat to database", error)
    }
}
seedData()