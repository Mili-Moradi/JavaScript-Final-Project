
import React from 'react'                           
import './App.css'
import Todo from './components/Todo'


const App = ()=> {              //            return JSX     
  return (
    <div className="main">
      <header>
        <h2>Todo App</h2>
      </header>
      <Todo />                        
    </div> 
  )
}
export default App            