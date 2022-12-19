import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../layout/Main/Navbar';
import { detailProduct } from '../../redux/actions/productAction';

const ReadingHistory = () => {
    const products = useSelector((state) => state.product.readProducts);
    const repeatProduct = useSelector((state) => state.product.repeatedCurrentProduct);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigate = (product) => {
        dispatch(detailProduct(product));
        navigate('/detail-product');
    }

    return (
        <div>
            <Navbar />
            <div>
                {
                    repeatProduct[0] && <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
                        <div className='h-52 w-52 mx-auto'>
                            <img src={repeatProduct[0]?.img} alt={repeatProduct[0]?.name} />
                        </div>
                        <p className='text-center font-semibold mb-3'>Name: {repeatProduct[0]?.name}</p>
                        <div className=' flex-1'>
                            <p className='text-center font-semibold mb-3'>Description: {repeatProduct[0]?.desc.slice(0, 100) + '...'}</p>
                        </div>
                        <button onClick={() => handleNavigate(repeatProduct[0])} className="btn btn-primary">Show Details</button>
                    </div>
                }
            </div>
            <div className='grid grid-cols-4 gap-14'>

                {
                    products.filter(product => product._id !== repeatProduct[0]?._id).sort((a, b) => b.quantity - a.quantity).map(product => <div className='shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900'>
                        <div className='h-52 w-52 mx-auto'>
                            <img src={product.img} alt={product.name} />
                        </div>
                        <h1 className='font-bold text-center'>{product.model}</h1>
                        <p className='text-center font-semibold mb-3'>Name: {product.name}</p>
                        <div className=' flex-1'>
                            <p className='text-center font-semibold mb-3'>Description: {product.desc.slice(0, 100) + '...'}</p>
                        </div>
                        <button onClick={() => handleNavigate(product)} className="btn btn-primary">Show Details</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ReadingHistory;