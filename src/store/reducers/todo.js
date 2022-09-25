import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/types/todo";

// 1
const initialState = {
    allIds: [],
    byIds: {},
};

// 2
export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        // 3
        case ADD_TODO: {
            // 4
            const { id, content } = action.payload;

            // 5
            return {
                ...state,

                allIds: [...state.allIds, id],

                byIds: {
                    ...state.byIds,

                    [id]: {
                        content,
                        complete: false,
                    }

                },
            };
        }

        case REMOVE_TODO: {
            const { id } = action.payload;
            
            const filteredId = state.allIds.filter((removedId) => removedId !== id);

            const filteredItems = filteredId.reduce((newObj, key) => {
                newObj[key] = state.byIds[key];
                return newObj;
            }, {});


            return {
                ...state,

                allIds: filteredId,

                byIds: filteredItems,
            };
        }

        case TOGGLE_TODO: {
            const { id } = action.payload;

            const targetTodo = state.byIds[id];

            return {
                ...state,

                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...targetTodo,
                        complete: !targetTodo.complete,
                    },
                }
            };
        }

        default:
            return state;
    }
};