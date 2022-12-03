const exp = require("constants")
const express = require("express")
const app = express()
require("dotenv").config()
const path = require("path")

app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3000
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
    console.log(`Server is started on port ${port}`)
})