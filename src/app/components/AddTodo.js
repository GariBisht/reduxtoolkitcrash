import React,{useState} from 'react'
import {useDispatch} from 'react-redux'     // its wiring thing does not come from redux toolkit
import { addTodo } from '../../feature/todo/todoSlice'

const AddTodo = () => {


    const [input , setInput ] = useState('')
    const dispatch = useDispatch()  

    const addTodoHandler = (e) => {
       e.preventDefault() 

       dispatch (addTodo(input))   //dispatch the action extract the data in payload 
       setInput('')
     
    }

  return (
    <>
       <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4"> Add Your To-Do List</h1>

        <form onSubmit={addTodoHandler} id="todo-form" className="flex gap-2 mb-4">
          <input
            type="text"
            id="todo-input"
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Add Todo
          </button>
        </form>

        {/* <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow"
            >
              {todo}
              <button
                onClick={() => deleteTodoHandler(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Delete
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
    </>
  )
}

export default AddTodo
