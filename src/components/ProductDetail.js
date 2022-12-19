import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../layout/Main/Navbar";

const ProductDetail = () => {
    const product = useSelector((state) => state.product.detailProduct);
    return (
        <div>
            <Navbar></Navbar>
            <div className='p-3 flex flex-col text-indigo-900'>

                <div className='h-52 w-52 mx-auto'>
                    <img src={product[0]?.img} alt={product[0].name} />
                </div>
                <p className='text-center font-semibold mb-3'>Name: {product[0]?.name}</p>
                <div className=' flex-1'>
                    <p className='text-center font-semibold mb-3'>Description: {product[0]?.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;