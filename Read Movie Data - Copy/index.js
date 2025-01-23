const {initializeDatabase} = require("./db/db.connect")
const express = require('express')
const app = express()

const Movie = require("./models/movie.models")

app.use(express.json())
initializeDatabase()

app.get('/', (req, res) => {
    res.send('Welcome to Movie server')
})

//Find a movie with a particular title

const readMovieByTitle = async (movieTitle) => {
    try{
        const movie = await Movie.findOne({title: movieTitle}) //return object
        return movie
    }
    catch(error){
        throw error
    }
}

app.get('/movies/:title', async (req, res) => {
    try{
        const movie = await readMovieByTitle(req.params.title)
        if(movie){
            res.json(movie)
        }
        else{
            res.status(404).json({error: 'Movie not foumd.'})
        }
    }
    catch{
        res.status(500).json({error: 'Failed to fetch movie.'})
    }
})

//To get all the movies in database

const readAllMovies = async() => {
    try{
        const movies = await Movie.find() //returns array of objects
        console.log(movies)
        return movies
    }
    catch(error){
        throw error
    }
}

app.get('/movies', async (req, res) => {
    try{
        const movies = await readAllMovies()
        console.log(movies)
        if(movies){
            res.json(movies)
        }
        else{
            res.status(404).json({error: 'No movies found.'})
        }
    }
    catch(error){
        res.status(500).json({error: 'Failed to fetch movies.'})
    }
})

//Get movie by director

const readMovieByDirector = async(directorName) => {
    try{
        const movie = await Movie.find({director: directorName})
        return movie
    }
    catch(error){
        throw error
    }
}

app.get('/movies/director/:directorName', async (req, res) => {
    try{
        const movie = await readMovieByDirector(req.params.directorName)
        console.log(movie)
        if(movie){
            res.send(movie)
        }
        else{
            res.status(404).json({error: 'Movie not found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Error in fetching movie.'})
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('App is running on port', PORT)
})