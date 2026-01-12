import React, { useRef } from 'react'
import todo_icon from './assets/logo.png'
import Todo_list from './Todo_list'
const Todo = () => {

  const inputref = useRef();

  const add = () => {
    const inputtext= inputref.current.value.trim();
    console.log(inputtext);
  }
  
  return (
    <div className='bg-white place-self-center-safe w-2xl max-w-3xl p-4 min-h-[600px] rounded-2xl'>
        
        {/* -----title section----- */}

        <div className='flex w-full m-2 gap-2'>
          <img className='w-10' src= {todo_icon} alt="logo" />
           <h1 className='text-pink-500 text-2xl justify-center font-semibold  '>To-do List</h1>
        </div>
        
        {/* ----- input section----- */}

        <div className='flex w-full m-1 p-6 gap-2'>
          <input ref={inputref} className='border-2 border-pink-300 rounded-lg w-full p-2 focus:outline-pink-400' type="text" placeholder='Add a new task...' />
          <button onClick={add} className='bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 cursor-pointer'>Add</button>
        </div>

        {/* ----- tasks section----- */}
          

        <div>

          <Todo_list text="make it webiste 1" />
           <Todo_list text="make it webiste 1" />
          
        </div>

        
    
        
    </div> 
  )
}

export default Todo