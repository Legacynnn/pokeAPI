const { Router } = require('express')
const Controller = require('../controllers/pokeController')

const routes = Router()

routes.post('/', Controller.createPoke ) 
routes.get('/', Controller.getAllPokes)

module.exports = routes