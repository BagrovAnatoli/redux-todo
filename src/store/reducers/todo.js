import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/types/todo";
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
} from"../actions/types/todo";

const initialState = {
    loading: false,
    error: null,
    todos: [],
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS_STARTED: {
            return {
                ...state,
                loading: true,
            };
        }

        case FETCH_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...action.payload.todos],
            };
        }

        case FETCH_TODOS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }

        case ADD_TODO_STARTED: {
            return {
                ...state,
                loading: true,
            };
        }

        case ADD_TODO_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                todos: [...state.todos, action.payload],
            };
        }

        case ADD_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        }

        case TOGGLE_TODO_STARTED: {
            return {
                ...state,
                loading: true,
            }
        }

        case TOGGLE_TODO_SUCCESS: {
            const todosCopy = state.todos.slice();
            const targetTodoId = action.payload.todo.id;
            const targetTodo = todosCopy.find((todo) => todo.id === targetTodoId);

            targetTodo.completed = action.payload.todo.completed;

            return {
                ...state,
                loading: false,
                error: null,
                todos: todosCopy,
            }
        }

        case TOGGLE_TODO_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            }
        }

         // 3
         case ADD_TODO: {
            // 4
            const { id, title } = action.payload;

            // 5
            return {
                ...state,

                todos: [
                    ...state.todos,
                    {
                        title,
                        completed: false,
                        id,
                    }
                ],
            };
        }

        case REMOVE_TODO: {
            const { id } = action.payload;

            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== id),
            }
        }

        case TOGGLE_TODO: {
            const { id } = action.payload;

            return {
                ...state,

                todos: state.todos.map((todo) => todo.id === id
                    ? {
                        ...todo,
                        completed: !todo.completed,
                    } 
                    :{
                        ...todo,
                    }),
            };
        }
        
        
        // // 3
        // case ADD_TODO: {
        //     // 4
        //     const { id, content } = action.payload;

        //     // 5
        //     return {
        //         ...state,

        //         allIds: [...state.allIds, id],

        //         byIds: {
        //             ...state.byIds,

        //             [id]: {
        //                 content,
        //                 complete: false,
        //             }

        //         },
        //     };
        // }

        // case REMOVE_TODO: {
        //     const { id } = action.payload;
            
        //     const filteredId = state.allIds.filter((removedId) => removedId !== id);

        //     const filteredItems = filteredId.reduce((newObj, key) => {
        //         newObj[key] = state.byIds[key];
        //         return newObj;
        //     }, {});


        //     return {
        //         ...state,

        //         allIds: filteredId,

        //         byIds: filteredItems,
        //     };
        // }

        // case TOGGLE_TODO: {
        //     const { id } = action.payload;

        //     const targetTodo = state.byIds[id];

        //     return {
        //         ...state,

        //         byIds: {
        //             ...state.byIds,
        //             [id]: {
        //                 ...targetTodo,
        //                 complete: !targetTodo.complete,
        //             },
        //         }
        //     };
        // }

        default:
            return state;
    }
};