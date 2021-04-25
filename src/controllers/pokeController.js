const pokeModel = require('../models/Pokes')

const Controller = {
    async createPoke(req, res){
        const bodyData = req.body
        try{
            const newPoke = await pokeModel.create(bodyData)
            return res.status(201).json(newPoke)
        }catch(err){
            return res.status(400).json(err)
        }
    },

    async reCreatePoke(req, res) {
        const bodyData = req.body
        try{
            const reNewPoke = await pokeModel.create(bodyData)
            return res.status(201).json(reNewPoke)
        }catch(err){
            return res.status(400).json(err)
        }
    },
    async getAllPokes(req, res) {
        try{
            const pokes = await pokeModel.find()
            return res.status(200).json(pokes)
        } catch(err){
            return res.status(400).json(err)
        }
    }
}

module.exports = Controller