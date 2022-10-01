import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from "../services/todo";
// import todoReducer from './reducers/todo';
// import filterReducer from './reducers/filter';
// import thunk from 'redux-thunk';

// export const store = configureStore({
//     reducer: {
//         todo: todoReducer,
//         filter: filterReducer,
//     },
//     middleware: [thunk], 
// });

export const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware), 
});