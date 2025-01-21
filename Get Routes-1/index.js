const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Hello Express!")
})

app.get("/about", (req, res) => {
    res.send("This is the About page")
})

app.get("/contact", (req, res) => {
    res.send("This is the Contact page")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})