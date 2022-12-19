import {
    ADD_CONTENT,
    GET_CONTENT,
    LOAD_PRODUCT,
    PRODUCT_LOADED,
    READ_CONTENT,
    REMOVE_PRODUCT,
    UPDATE_CONTENT,
} from "../actionTypes/actionTypes";

const initialState = {
    cart: [],
    products: [],
    detailProduct: [],
    readProducts: [],
    repeatedCurrentProduct: [],
};

const productReducer = (state = initialState, action) => {
    const selectedProduct = state.readProducts.find(
        (product) => product._id === action.payload._id
    );

    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...state,
                products: action.payload,
            };
        case ADD_CONTENT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product) => product._id !== action.payload
                ),
            };
        case UPDATE_CONTENT:
            return {
                ...state,
                products: [action.payload],
            };

        case GET_CONTENT:
            return {
                ...state,
                detailProduct: [action.payload],
            };

        case READ_CONTENT:
            if (selectedProduct) {
                const newReadProducts = state.readProducts.filter(product => product._id !== selectedProduct._id);
                selectedProduct.quantity = selectedProduct.quantity + 1;
                return {
                    ...state,
                    readProducts: [...newReadProducts, selectedProduct],
                    repeatedCurrentProduct: [action.payload]
                };
            }
            return {
                ...state,
                readProducts: [...state.readProducts, { ...action.payload, quantity: 1 }],
            }
        case PRODUCT_LOADED:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};
export default productReducer;
