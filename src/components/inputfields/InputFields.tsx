import React, { useRef } from 'react';
import './style.css'

interface Props{
    todo:string;
    setTudo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}


const InputFields:React.FC<Props> = ({todo,setTudo,handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur()
    }}>
        <input type="input" 
         placeholder='Enter the task'
         className='input__box'
         value={todo}
         onChange={(e)=>setTudo(e.target.value)}
         ref={inputRef}
         />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFields
