import React,{useRef, useState} from 'react'
//import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null)

const add=()=>{
  const inputText = inputRef.current.value.trim();

  if(inputText ===''){
    return null;
  }
  
  const newTodo = {
    id:Date.now(),
    text: inputText,
    isComplete:false,
  }
  setTodoList((prev)=> [...prev,newTodo]);
  inputRef.current.value="";

}

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] ronded-x1'>


      {/*-------------------title---------------*/}

      <div className='flex items-center mt-7 gap-2'>
        <img  className ='w-8' src={todo_icon} alt ="" />
        <h1 className='text-3xl font-semibold'>To-Do List</h1>

      </div>
      
      {/*-------------------input box---------------*/}
      <div className='flex item-center my-7 bg-gray-200 rounded-full'>
        <input  ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task'/>
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>ADD +</button>
      </div>


      {/*-------------------todo list---------------*/}
      <div>
        {todoList.map((item, index)=>{ 
          return <TodoItems key ={index} text = {item.text}/>
        })}
         
      </div>

    </div>
  )
}

export default Todo