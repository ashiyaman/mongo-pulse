const {initializeDatabase} = require("./db/db.connect")

const Movie = require("./models/movie.models")
initializeDatabase()

const newMovie = {    
    title: "Ayyapanum Koshiyum",
    releaseYear: 2021,
    genre: ["Comedy", "Drama"],
    director: "Aditya Chopra",
    actors: ["Actor 1", "Actor 2"],
    language: "Malayalam",
    country: "India",
    rating: 9.9,
    plot: "An upright man who always strives to do the right thing",
    awards: "Multiple Filmfare Awards",
    posterUrl: "https://example.com/ayyapanumkoshiyum.jpg",
    trailerUrl: "https://example.com/ayyapanumkoshiyum.mp4"    
}

async function createMovie(newMovie){
    try{
        const movie = new Movie(newMovie)
        const showMovie = await movie.save()
        console.log("Movie saved", showMovie)
    }
    catch(error){
        throw error
    }
}

//createMovie(newMovie)

//Find a movie with a prticular title

const readMovieByTitle = async (movieTitle) => {
    try{
        const movie = await Movie.findOne({title: movieTitle}) //return object
    }
    catch(error){
        throw error
    }
}

//readMovieByTitle("PK")

//To get all the movies in database

const readAllMovies = async() => {
    try{
        const movies = await Movie.find() //returns array of objects
    }
    catch(error){
        throw error
    }
}

//readAllMovies()

//Get movie by country

const readMovieByCountry = async(country) => {
    try{
        const movie = await Movie.find({country: country})
        console.log(movie)
    }
    catch(error){
        throw error
    }
}

//readMovieByCountry("India")

//Find a movie and update its rating

const updateMovie = async(movieId, dataToUpdate) => {
    try{
        const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true})
        console.log(updatedMovie)
    }
    catch(error){
        throw error
    }
}

//updateMovie("677e09a70d279b7e66cc25d0", {rating: 8.0})

//Find one movie and update its value

const updateMovieDetail = async(movieTitle, dataToUpdate) => {
    try{
        const updatedMovie = await Movie.findOneAndUpdate({title: movieTitle}, dataToUpdate, {new: true})
        console.log(updatedMovie)
    }
    catch(error){
        console.log("Error in changing data: ", error)
    }
}

//updateMovieDetail("Kabhi Khushi Kabhie Gham", {releaseYear: 2001})

//Find a movie by id and delete from the database

const deleteMovie = async(movieId) => {
    try{
        const deletedMovie = await Movie.findByIdAndDelete(movieId)
    }
    catch(error){
        console.log("Error in deleting Movie", error)
    }
}

//deleteMovie("677e09a70d279b7e66cc25cd")

//Find a movie and delete from the database

const deleteMovieFromDb = async(movieTitle) => {
    try{
        const deletedMovie = await Movie.findOneAndDelete({title: movieTitle})
        console.log("This movie was deleted:", deletedMovie)
    }
    catch(error){
        console.log("Error in deleting Movie", error)
    }
}

deleteMovieFromDb("Ayyapanum Koshiyum")



