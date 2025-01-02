import React from 'react'
import { useSelector } from 'react-redux'
import { removeTodo } from '../../feature/todo/todoSlice';
import { useDispatch } from 'react-redux';
//import { addTodo } from '../../feature/todo/todoSlice';

const Todos = () => {

   const todos = useSelector(state => state.todos)  //methods takes place a callback
   console.log(todos);   
   const dispatch = useDispatch()

  return (
    <>
    <h1 className="text-2xl font-bold text-center text-gray-400 mb-4">Your To-Do List is here</h1>
    <ul className='list-none'>
    {todos.map((todo)=> (
 
        <li className='mt-4 flex justify-between items-center bg-purple-800
        px-4 py-2 rounded' key = {todo.id}> 
        
        <div className='text-white'>{todo.text} </div> 
       <button onClick={() => dispatch(removeTodo(todo.id))}
               className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded flex items-center gap-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
  Delete
</button>

        
        </li>
    ))}
  </ul>
    </>
  )
}

export default Todos
