import {configureStore} from '@reduxjs/toolkit'
//it needs reducers ki knowledge
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer : todoReducer
})