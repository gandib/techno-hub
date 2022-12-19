import { REMOVE_PRODUCT } from "../../actionTypes/actionTypes";

const deleteProduct = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(REMOVE_PRODUCT(id));
        }
    }
};

export default deleteProduct;