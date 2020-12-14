import React from 'react';
import {ProductConsumer} from "../../context";

export default function CartTotals(props) {
    return (
        <div className="container">
            <ProductConsumer>
                {value=>{
                    const {clearCart,cartSubTotal,cartTax,cartTotal}=
                    value;
                    return <div className="col text-title my-4 text-center">
                        <button className="btn btn-outline-danger
                        text-capitalize mb-4" onClick={clearCart}>
                            clear cart
                        </button>
                        <h3>subtotal: ${cartSubTotal}</h3>
                        <h3>tax: ${cartTax}</h3>
                        <h3 className='text-primary'>total: ${cartTotal}</h3>
                    </div>
                }}
            </ProductConsumer>
        </div>
    );
}

