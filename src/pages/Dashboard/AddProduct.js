import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addProductData from "../../redux/thunk/products/addProductData";

const AddProduct = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        const product = {
            name: data.name,
            desc: data.desc,
            tag: data.tag,
            img: data.image,
        };

        console.log(product);
        dispatch(addProductData(product));
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='name'>
                        Product Name
                    </label>
                    <input type='text' id='name' {...register("name")} placeholder='Product Name' required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='desc'>
                        Description
                    </label>
                    <input type='text' id='desc' {...register("desc")} placeholder='Description' required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' id='image' {...register("image")} placeholder='Image Link' required />
                </div>

                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-3' htmlFor='tag'>
                        Tag
                    </label>
                    <select name='tag' id='tag' {...register("tag")} required>
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

export default AddProduct;
