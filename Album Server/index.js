const express = require('express')
const app = express()

app.use(express.json())

const albums = [

    { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
  
    { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
  
    { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
  
  ];

app.get('/', (req, res) => {
    res.send('Hello, This is Express Assignment Server.')
})

app.post('/albums', (req, res) => {
    const newAlbum = req.body

    if(!newAlbum.title || !newAlbum.artist || !newAlbum.year){
        res.status(400).json({error: 'Title, artist and year are required.'})
    }
    else{
        albums.push(newAlbum)
        res.status(200).json({message: 'Album added successfully.', album: newAlbum})
    }
})

app.delete('/albums/:id', (req, res) => {
    const albumToBeDeletedId = parseInt(req.params.id)

    const albumIndex = albums.findIndex((album) => album.id === albumToBeDeletedId)

    if(albumIndex === -1){
        res.status(404).json({error: 'Album not found.'})
    }
    else{
        albums.splice(albumIndex, 1)
        res.status(200).json({message: 'Album deleted successfully.'})
    }
})

app.post('/albums/:id', (req, res) => {
    const albumId = parseInt(req.params.id)

    const updatedAlbumData = req.body

    const albumToUpdate = albums.find(album => album.id === albumId)

    if(!albumToUpdate){
        res.status(404).json({error: 'Album not found.'})
    }
    else{
        if(!updatedAlbumData.title || !updatedAlbumData.artist || !updatedAlbumData.year){
            res.status(400).json({error: 'Album title, artist and year are required.'})
        }
        else{
            Object.assign(albumToUpdate, updatedAlbumData)
            res.status(200).json({message: 'Album updated successfully.', album: albumToUpdate})
        }
    }
})

app.get('/albums', (req, res) => {
    res.send(albums)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Connected to Server')
})