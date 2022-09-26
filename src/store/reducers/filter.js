import { TOGGLE_FILTER, FILTER_YES, FILTER_NO, FILTER_ALL } from "../actions/types/filter";

// 1
const initialState = {
    showFilter: false,
    filterValue: FILTER_ALL,
};

// 2
export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        // 3
        case TOGGLE_FILTER: {
            // 4

            // 5
            return {
                ...state,

                showFilter: !state.showFilter,
            };
        }

        case FILTER_YES: {

            return {
                ...state,

                filterValue: FILTER_YES,
            };
        }

        case FILTER_NO: {

            return {
                ...state,

                filterValue: FILTER_NO,
            };
        }

        case FILTER_ALL: {

            return {
                ...state,

                filterValue: FILTER_ALL,
            };
        }

        default:
            return state;
    }
};