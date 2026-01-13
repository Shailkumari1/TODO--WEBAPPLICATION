import React, { useEffect, useRef, useState } from 'react'
import todo_icon from './assets/logo.png'
import Todo_list from './Todo_list'
const Todo = () => {

  const [todolist,settodolist]= useState([]);
  const inputref = useRef();

  //  -----add task function ----
  const add = () => {
    const inputtext= inputref.current.value.trim();
    
    if(inputtext===""){
      return null;
    
  }
    const  newtask={
      id : Date.now(),
      text : inputtext,
      iscompleted : false,
        }
        settodolist((prev)=>[...prev, newtask]);
        inputref.current.value = "";
}
        // Delete task function

        const deletetodo = (id) => {
          settodolist((prev)=> {
            return prev.filter((task) => task.id !== id );
          })
        }
  
        // task complete function

        const toggle = (id) =>{
          settodolist((prev)=>{
            return prev.map((todo) =>{
              if(todo.id ===id){
                return {...todo, iscompleted : !todo.iscompleted}
              }
              return todo;
            })
          })
        }

        useEffect(()=>{
          console.log(todolist);
          
        },[todolist])
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

          {todolist.map((item, index)=>{
            return <Todo_list key ={index} text ={item.text} id={item.id} iscompleted ={item.iscompleted} 
            deletetodo={deletetodo} toggle={toggle} />

          })}
          
        </div>

        
    
        
    </div> 
  )
}

export default Todo