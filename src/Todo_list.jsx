import React from 'react'
import todo_list_icon from './assets/Delete.png'
import todo_incomplete_icon from './assets/circle.png'
import todo_complete_icon from './assets/tick.png'

const Todo_list = ({text, id , iscompleted,deletetodo,toggle }) => {
  return (
    <div>
        {/* ----- tasks section----- */}
        <div className='flex items-center my-2 gap-2 p-1 '>
            <div onClick={()=>{toggle(id)}}  className='flex flex-1 items-center cursor-pointer'>
                <img className='w-7' src={ iscompleted ? todo_complete_icon : todo_incomplete_icon} alt="incomplete icon" />
                <p className={`text-pink-500 ml-4 text-[20px] 
                  ${iscompleted ? "line-through" : ""}`}> {text} </p>
            </div>

             <img  onClick={()=>{deletetodo(id)}} className='w-7 cursor-pointer' src={todo_list_icon} alt="Delete icon " />
        </div>
    </div>
  )
}

export default Todo_list