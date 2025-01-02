import { createSlice , nanoid } from '@reduxjs/toolkit'

const initialState = {

// todos: [] ,    //empty array
 todos: [{id: 1 , text: 'Hii'}] ,
}

export const todoSlice = createSlice ({  //new method inside the redux toolkit 
    name: 'todo' ,
    initialState ,     //first is initial state 
    reducers: {
         addTodo:(state , action) => {
          //todo pushed on array 
          const todo = {
            id: nanoid(),
            text : action.payload,
          }
          state.todos.push(todo)
         },

         removeTodo:(state , action) => {
          state.todos = state.todos.filter ((todo) => 
         todo.id !== action.payload)

         }
    }     
    
    //object talking to the store multiple reducers which will be responsible for updating the states of store 
    // two things -> 1-state 2-action - sends some data by payload fancy name hehe
 })

//exporting entire reducer and methods
 export const {addTodo , removeTodo} = todoSlice.actions

 export default todoSlice.reducer
 //export const selectTodos = (state) => state.todo.todos