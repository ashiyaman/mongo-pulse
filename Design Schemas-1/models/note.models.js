const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
   },
   content: String,
   category: {
    type: String,
    enum: ['Personal', 'Work', 'Study', 'Ideas', 'Journal', 'Other']
   },
   tags: [String],
   
},
{timeStamps: true})

const Note = mongoose.model("Note", noteSchema)

module.exports = Note