import React from 'react'
import './TodoList.css'
import { Todo } from '../inputfields/model'
import SingleTodo from '../singletodo/SingleTodo';


interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos}:Props) => {
  return (
    <div className='all__todo'>
       {
        todos.map((todo)=>(
            <SingleTodo
               todo={todo}
               key={todo.id}
               todos={todos}
               setTodos={setTodos}
            />
        ))
       }
      
    </div>
  )
}

export default TodoList
