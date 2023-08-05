import React, { useState } from 'react';
import './App.css';
import InputFields from './components/inputfields/InputFields';
import { Todo } from './components/inputfields/model';
import TodoList from './components/todoList/TodoList';



const App: React.FC =()=>{

  const [todo,setTudo] = useState<string> ("");
  const [todos,setTodos] = useState<Todo[]> ([])

  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTudo("");
    } 
  }
  console.log(todos)
 
  return(
    <div className="App">
      <span className="heading">TaskiFy</span>
       <InputFields todo={todo} setTudo={setTudo} handleAdd={handleAdd}/>
       <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App;




  