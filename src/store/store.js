import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todo';
import filterReducer from './reducers/filter';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        filter: filterReducer,
    },
    middleware: [thunk], 
});