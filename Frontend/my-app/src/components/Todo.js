import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import './Todo.css'

const Todo = props => {                                         

    const [todoName, setTodoName] = useState('')  // input value 
    const [todoList, setTodoList] = useState([])   // todo list

    useEffect(() => {                                   // Update Document 1.arg function was tun
        axios.get('http://localhost:8000/api/todo')
            .then((result) => {                         //promiss da Async Process
                const todoData = result.data
                const todos = []

                for (const key in todoData){
                    todos.push({
                        id: key,
                        title: todoData[key].title
                    })
                }
                setTodoList(todos)
           })  
    })



    const inputChangeHandler = (event) => {    // manage value changes
        setTodoName(event.target.value)
    }                                           // update value
    
    
    const todoAddHandler = (event) => {           // manage Todo list
        event.preventDefault()
        setTodoList(todoList.concat(todoName))

        axios.post('http://localhost:8000/api/todo', {      // 1.arg adress 2.arg a objekt mit value 
            title: todoName
        })
        .then((res) => {                                    // promiss da delay wegen Async process
            console.log(res);
        })
        .catch((err) =>{
            console.log(err);
        })
        setTodoName('')
    }




    return(                                         //JSX
        <div className="todo">
            <form onSubmit={todoAddHandler}>
                <input
                    type="text"
                    placeholder="Todo..."
                    onChange={inputChangeHandler}  
                    value={todoName}
               />
               <button className="btn">Add</button>
            </form>
            <ul>
                {
                    todoList.map(todo =>{
                        return <li key={todo.id}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Todo