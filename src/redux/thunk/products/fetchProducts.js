import { loadProduct } from "../../actions/productAction";

const loadProductData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://techno-hub-server.vercel.app/products");
        const data = await res.json();
        console.log(data.data)
        if (data.data.length) {
            dispatch(loadProduct(data.data));
        }
    };
};


export default loadProductData;