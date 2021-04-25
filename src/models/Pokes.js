const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    id: Number,
    name: String,
    typeList: Array,
})



module.exports = mongoose.model('Pokes', Schema )