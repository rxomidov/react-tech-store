import React from 'react';
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import Title from "../Title";

export default function Cart(props) {
    return (
        <section className="py-5">
            {/*title*/}
            <div className="container">
                <Title title="your cart items" center/>
            </div>
            {/*cart columns*/}
            <CartColumns/>
            {/*cart list*/}
            <CartList/>
            {/*cart totals*/}
            <CartTotals/>
        </section>
    );
}
