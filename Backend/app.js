const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')
const todoRoutes = require ('./routes/todo-routes')

const app = express()                       // gibt ein Objekt zurück

app.use(bodyParser.json())                      // Middleware           Daten in form von Json     

app.use((req, res, next) => {                   //Middleware          
    res.setHeader('Access-Control-Allow-Origin', '*')               // Headers für unsere Responce
    res.setHeader('Access-Control-Allow-Headers', '*')              // 1.arg name 2.arg value
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})

app.use('/api/todo', todoRoutes)              //Middleware 

mongoose.connect('mongodb://127.0.0.1:27017/todo')         // verbindung zu DB  hier wird todo in DB erstellt
.then(() => {
    app.listen(8000)
})
.catch(err => {
    console.log(err)
})