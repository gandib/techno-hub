import { UPDATE_CONTENT } from "../../actionTypes/actionTypes";

const updateProduct = (product) => {
    console.log(product._id)
    return async (dispatch, getState) => {
        const res = await fetch(`https://techno-hub-server.vercel.app/product/update/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        });
        const data = await res.json();
        console.log(data.data)
        if (data.acknowledged) {
            dispatch(UPDATE_CONTENT(data.data));
        }
    }
};

export default updateProduct;