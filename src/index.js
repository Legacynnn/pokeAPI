const express = require('express')
const pokeModel = require('./models/Pokes')
const Controller = require('./controllers/pokeController')

const routes = require('./routes/routes')

require('../db')

const app = express()

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log("Server is on in port 3333")
})