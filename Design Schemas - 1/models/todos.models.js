const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High']
    },
    dueDate: Date,
    completed: {
        type: Boolean,
        default: false
    },
    tags: [{
        type: String
    }],
    createdAt: Date.now(),
    updatedAt: Date.now()
})

const Todos = mongoose.model("Todos", todoSchema)

module.exports = Todos