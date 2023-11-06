
const Todo = require ('../models/todo')         // Todo ein Konstruktor 

//------------------------------getTodos---------------------------------------------
const getTodos = async(req, res, next) => {               // Function mit async 
  const todos =  await Todo.find()                        // methode find von mongoose auf Konstruktor

  res.json(todos)                                         // todos von models hier inportirt als json zeigen
}


//------------------------------createTodos---------------------------------------------

const createTodos = async (req, res, next) => {           // Function mit async 
    const title = req.body.title                          // durch request body nimmt von client title 

    const createdTodo = new Todo({                        // new objekt basiert auf Schema
        title: title
    })
   await createdTodo.save()                               // save methode von Mongoos speichert in DB mit await
   res.status(201).json({message: 'Todo Created!' })      // response  mit status code 
}


exports.getTodos = getTodos             
exports.createTodos = createTodos