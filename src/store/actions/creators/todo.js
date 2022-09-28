// import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../types/todo";
import {
    FETCH_TODOS_STARTED,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO_STARTED,
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    TOGGLE_TODO_STARTED,
    TOGGLE_TODO_SUCCESS,
    TOGGLE_TODO_FAILURE,
} from "../types/todo";

// let nextTodoId = 1000;

export const fetchTodosStarted = () => ({
    type: FETCH_TODOS_STARTED,
});

export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: {
        todos,
    },
});

export const fetchTodosFailure = (error) => ({
    type: FETCH_TODOS_FAILURE,
    payload: {
        error,
    }
});

export const addTodoSuccess = (todo) => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo,
    }
});

export const addTodoStarted = () => ({
    type: ADD_TODO_STARTED,
});

export const addTodoFailure = (error) => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error,
    }
});

export const toggleTodoStarted = () => ({
    type: TOGGLE_TODO_STARTED,
});

export const toggleTodoSuccess = (todo) => ({
    type: TOGGLE_TODO_SUCCESS,
    payload: {
        todo,
    }
});

export const toggleTodoFailure = (error) => ({
    type: TOGGLE_TODO_FAILURE,
    payload: {
        error,
    }
});

// export const addTodo = (content) => ({
//     type: ADD_TODO,
//     payload: {
//         id: ++nextTodoId,
//         content,
//     },
// });

// export const removeTodo = (id) => ({
//     type: REMOVE_TODO,
//     payload: { id },
// });

// export const toggleTodo = (id) => ({
//     type: TOGGLE_TODO,
//     payload: { id },
// });