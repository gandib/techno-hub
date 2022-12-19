import React from "react";
import { BiListPlus } from 'react-icons/bi'
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { detailProduct, readingHistory } from "../redux/actions/productAction";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const handleNavigate = () => {
        dispatch(detailProduct(product));
        dispatch(readingHistory(product));
        navigate('/detail-product');
    }
    return (
        <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>

            <div className='h-52 w-52 mx-auto'>
                <img src={product.img} alt={product.name} />
            </div>
            <h1 className='font-bold text-center'>{product.model}</h1>
            <p className='text-center font-semibold mb-3'>Name: {product.name}</p>
            <div className=' flex-1'>
                <p className='text-center font-semibold mb-3'>Description: {product.desc.slice(0, 100) + '...'}</p>
            </div>
            <button onClick={() => handleNavigate()} className="btn btn-primary">Show Details</button>
        </div>
    );
};

export default ProductCard;
