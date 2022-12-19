import { TOGGLE_TAG } from "../actionTypes/actionTypes";

export const initialState = {
    filters: {
        tags: [],
    },
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TAG:
            if (!state.filters.tags.includes(action.payload)) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: [...state.filters.tags, action.payload],
                    },
                };
            }
            else {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        tags: state.filters.tags.filter(
                            (tag) => tag !== action.payload
                        ),
                    },
                };
            }

        default:
            return state;
    }
};