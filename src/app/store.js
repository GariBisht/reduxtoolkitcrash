import {configureStore} from  "@reduxjs/toolkit" 
import todoReducer from "../feature/todo/todoSlice"

export const store = configureStore({
    // reducer just an object
 // reducer: {} ,
   reducer : todoReducer,

})


//create a store & wrap it on provider in index.js

//Write ur reducer in features

