import React from 'react';
import spBg from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from "../context";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import {FaCheck} from "react-icons/all";

export default function SingleProductPage(props) {
    return (
        <>
            <Hero img={spBg} title='single product'/>
            <ProductConsumer>
                {value => {
                    const {singleProduct, addToCart, loading} = value;
                    if (loading) {
                        //console.log('loading')
                        return <h1 className="text-center text-title my-5">loading...</h1>
                    }
                    const {company, description, id, price, title, image, freeShipping} =
                        singleProduct
                    return <section className="py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <img src={image} alt="imagee" className="img-fluid"/>
                                </div>
                                <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                                    <h5 className="text-title mb-4">model: {title}</h5>
                                    <h5 className="text-capitalize text-muted mb-4">
                                        company: {company}
                                    </h5>
                                    <h5 className="text-main text-capitalize mb-4">
                                        price: {price} $
                                    </h5>
                                    <p className="text-capitalize text-title mt-3">
                                        some info about product:
                                    </p>
                                    <p>{description}</p>
                                    <div>
                                        {freeShipping &&
                                        <div className='text-title mb-3'>
                                            free shipping
                                            <FaCheck className='text-success ml-1'/>
                                        </div>
                                        }
                                    </div>
                                    <button type="button" className="main-link"
                                            style={{margin: "0.75rem"}} onClick={() => addToCart(id)}>
                                        add to cart
                                    </button>
                                    <Link to='/products' className="main-link"
                                          style={{margin: "0.75rem"}}>
                                        back to products
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                }}
            </ProductConsumer>
        </>
    );
}
