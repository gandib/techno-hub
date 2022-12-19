import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import addProductData from "../../redux/thunk/products/addProductData";
import updateProduct from "../../redux/thunk/products/updateProduct";

const UpdateProduct = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.products);
    const [id, setId] = useState(product[0]._id);
    const [name, setName] = useState(product[0].name);
    const [desc, setDesc] = useState(product[0].desc);
    const [tag, setTag] = useState(product[0].tag);
    const [img, setImg] = useState(product[0].img);
    console.log(product)
    console.log(name)
    const submit = (event) => {
        event.preventDefault();
        const product = {
            _id: id,
            name: name,
            desc: desc,
            tag: tag,
            img: img,
        };

        console.log(product);
        dispatch(updateProduct(product));
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='name'>
                        Product Name
                    </label>
                    <input type='text' id='name' onChange={(e) => setName(e.target.value)} value={name || ''} placeholder='Product Name' required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='desc'>
                        Description
                    </label>
                    <input type='text' id='desc' onChange={(e) => setDesc(e.target.value)} value={desc || ''} placeholder='Description' required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' id='image' onChange={(e) => setImg(e.target.value)} value={img || ''} placeholder='Image Link' required />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='tag'>
                        Tag
                    </label>
                    <select name='tag' id='tag' onChange={(e) => setTag(e.target.value)} value={tag || ''} required>
                        <option value='hp'>HP</option>
                        <option value='lenovo'>Lenovo</option>
                    </select>
                </div>


                <div className='flex flex-col w-full max-w-xs'></div>


                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;