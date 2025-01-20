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

createMovie(newMovie)
