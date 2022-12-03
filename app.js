const exp = require("constants")
const express = require("express")
const app = express()
require("dotenv").config()
const path = require("path")

const port = process.env.PORT || 3000
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})