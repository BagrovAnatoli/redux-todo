import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todo';
import filterReducer from './reducers/filter';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer,
    }, 
});