import React from 'react';
import {ProductConsumer} from "../context";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function HomePage() {
    return (
        <>
            <Hero title="awesome gadgets" max="true">
                <Link to="/products" className="main-link"
                style={{margin:"rem"}}>our products </Link>
            </Hero>
        </>
    );
}

