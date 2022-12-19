import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { toggleTag } from "../../redux/actions/filterActions";
import loadProductData from "../../redux/thunk/products/fetchProducts";

const Home = () => {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filter.filters);
    const { tags } = filters;
    const products = useSelector((state) => state.product.products);
    const [sortBy, setSortBy] = useState('first');

    useEffect(() => {
        dispatch(loadProductData())
    }, [dispatch]);
    console.log(products);

    console.log(sortBy === 'first');


    const activeClass = "text-white  bg-indigo-500 border-white";

    // sorting array
    const mapped = products.map((v, i) => {
        return { i, value: (v) };
    });
    const sortedProducts = mapped.sort((a, b) => (b.i) - (a.i));
    console.log(sortedProducts)

    let content;
    if (products.length) {
        if (sortBy === 'last') {
            content = sortedProducts.map((product) => (
                <ProductCard key={product.value._id} product={product.value} />
            ))
        }
        else {
            content = products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))
        }
    }

    if (products.length && (tags.length)) {
        if (sortBy === 'last') {
            content = sortedProducts.filter(product => {
                return product;
            })
                .filter(product => {
                    if (tags.length) {
                        return tags.includes(product.value.tag)
                    }
                    return product
                }).map((product) => (
                    <ProductCard key={product.value._id} product={product.value} />
                ))
        }
        else {
            content = products.filter(product => {
                return product;
            })
                .filter(product => {
                    if (tags.length) {
                        return tags.includes(product.tag)
                    }
                    return product
                }).map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))
        }

    }

    return (
        <div className='max-w-7xl gap-14 mx-auto my-10'>

            <div className='mb-10 flex justify-end gap-5'>
                <div className="pt-1">
                    <label className='mb-3 pr-2 text-indigo-600 font-bold' htmlFor='tag'>
                        Sort By
                    </label>
                    <select onClick={(e) => setSortBy(e.target.value)} className="p-2" name='sort' id='sort' required>
                        <option value='first'>First Upload</option>
                        <option value='last'>Last Upload</option>
                    </select>
                </div>
                <button onClick={() => dispatch(toggleTag("hp"))} className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("hp") ? activeClass : null}`}>
                    HP
                </button>
                <button onClick={() => dispatch(toggleTag("lenovo"))} className={`border px-3 py-2 rounded-full font-semibold ${tags.includes("lenovo") ? activeClass : null}`}>
                    Lenovo
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
                {content}
            </div>
        </div>
    );
};

export default Home;
