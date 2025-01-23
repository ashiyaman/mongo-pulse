const express = require("express")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello,From Express server.')
})

const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
  
  ];;

app.post('/books', (req, res) => {
    const newBook = req.body

    if(!newBook.title || !newBook.author || !newBook.year){
        res.status(400).json({error: 'Title, author and year are required.'})
    }
    else {
        books.push(newBook)
        res.status(201).json({message: 'Book added successfully', book: newBook})
    }
})

app.get('/books', (req, res) => {
    res.send(books)
})

app.delete("/books/:id", (req, res) => {
    const bookToDeleteId = parseInt(req.params.id)

    const bookIndex = books.findndex((book) => book.id === bookToDeleteId)

    if(bookIndex === -1){
        res.status(404).json({error: "Book not Found."})
    }
    else{
        books.splice(bookIndex, 1)
        res.status(200).json({message: "Book deleted successfully."})
    }
})

app.post('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id)

    const updatedBookData = req.body

    const bookToUpdate = books.find(car => book.id === bookId)

    if(!bookToUpdate){
        res.status(404).json({error: 'Book not found.'})
    }
    else{
        Object.assign(bookToUpdate, updatedBookData)
        res.status(200).json({message: 'Book updated successfully', book: bookToUpdate})
    }
})

const todos = [

    { id: 1, title: 'Water the plants', day: 'Saturday' },
  
    { id: 2, title: 'Go for a walk', day: 'Sunday' }
  
  ];

app.post('/todos', (req, res) => {
    const newTodo = req.body

    if(!newTodo.title || !newTodo.day){
        res.status(400).json({error: 'Title and day are required.'})
    }
    else {
        todos.push(newTodo)
        res.status(201).json({message: 'Todo added successfully', todo: newTodo})
    }
})

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.delete('/todos/:id', (req,res) => {
    const todoToBeDeletedId = parseInt(req.params.id)

    const todoIndex = todos.findIndex((todo) => todo.id === todoToBeDeletedId)

    if(todoIndex === -1){
        res.status(404).json({error: 'Todo does not exist.'})
    }
    else{
        todos.splice(todoIndex, 1)
        res.status(200).json({message: 'Todo deleted successfully.'})
    }
})

app.post('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id)

    const updatedTodoData = req.body

    const todoToUpdate = todos.find(todo => todo.id === todoId)

    if(!todoToUpdate){
        res.status(404).json({error: 'Todo not found.'})
    }
    else{
        Object.assign(todoToUpdate, updatedTodoData)
        res.status(200).json({message: 'Todo updated successfully', todo: todoToUpdate})
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Connected to database')
})