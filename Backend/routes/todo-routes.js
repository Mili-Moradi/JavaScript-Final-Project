const express = require ('express')

const router = express.Router() //routing

const todoControllers = require ('../controllers/todo-controllers')
                                                        //HTTP request methods (GET,POST,PUT,DELETE)

router.get('/', todoControllers.getTodos)        // Request from url 1.Arg Rout 2.Arg Function was tun mit 3 Arg
router.post('/', todoControllers.createTodos)          // Request from inside programm or Forms 
                                                        //function von controllers aufgerufen mit methode 

module.exports = router