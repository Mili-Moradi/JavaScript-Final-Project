const mongoose = require('mongoose')                //Definieren eines Mongoose-Schemas

const Schema = mongoose.Schema                   // objekt mongoose mit klasse Schema aufgerufen

const todoSchema = new Schema({                 // Schema ist eine Konstruktor . hier wird einen objekt von Konstruktor rtstellt 
    title: { type: String, required: true}          
})

module.exports = mongoose.model('Todo', todoSchema)       // in controllers wird aufgerufen 