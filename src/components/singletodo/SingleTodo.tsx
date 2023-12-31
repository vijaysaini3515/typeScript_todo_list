import React,{useState,useRef,useEffect} from 'react';
import './SingleTodo.css'
import { Todo } from '../inputfields/model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
 import {MdDone} from 'react-icons/md'
import TodoList from '../todoList/TodoList';


type Prop={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({todo,todos,setTodos}:Prop) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
      }, [edit]);

const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
     const handleDone =(id:number)=>{
            setTodos(
                todos.map((todo)=>
                todo.id === id?{...todo,isDone:!todo.isDone}:todo
                 
                )
            );
     };
     
     const handleDelete =(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id !==id))
     }


  return (
    <form className='todo__single' onSubmit={(e) => handleEdit(e, todo.id)}>
         {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
        <div>
            <span className="icon" onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}>
            <AiFillEdit />
            </span>
            <span className="icon" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={()=>handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
