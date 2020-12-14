import React from 'react';
import Products from "../components/ProductsPage/Products";
import Hero from "../components/Hero";
import productsBg from '../images/productsBcg.jpeg'


function ProductsPage(props) {
    return (
        <>
            <Hero img={productsBg}/>
            <Products/>
        </>
    );
}

export default ProductsPage;