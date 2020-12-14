import React from 'react';
import CartSection from '../components/CartPage'
import cartBg from '../images/storeBcg.jpeg'
import Hero from "../components/Hero";

function CartPage(props) {
    return (
        <>
            <Hero img={cartBg}/>
            <CartSection/>
        </>
    );
}

export default CartPage;