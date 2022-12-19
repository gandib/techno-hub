import {
    ADD_CONTENT,
    GET_CONTENT,
    LOAD_PRODUCT,
    PRODUCT_LOADED,
    REMOVE_PRODUCT,
    UPDATE_CONTENT,
    READ_CONTENT,
} from "../actionTypes/actionTypes";

export const loadProduct = (data) => {
    return {
        type: LOAD_PRODUCT,
        payload: data,
    };
};


export const addProduct = (product) => {
    return {
        type: ADD_CONTENT,
        payload: product,
    };
};

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: id,
    };
};

export const updatedProduct = (product) => {
    return {
        type: UPDATE_CONTENT,
        payload: product,
    };
};

export const detailProduct = (product) => {
    return {
        type: GET_CONTENT,
        payload: product,
    };
};

export const readingHistory = (product) => {
    return {
        type: READ_CONTENT,
        payload: product,
    };
};


export const loaded = (products) => {
    return {
        type: PRODUCT_LOADED,
        payload: products,
    };
};
