import { TOGGLE_TAG } from "../actionTypes/actionTypes"

export const toggleTag = (tagName) => {
    return {
        type: TOGGLE_TAG,
        payload: tagName,
    };
};
