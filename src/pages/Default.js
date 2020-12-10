import React from 'react';
import defaultBg from '../images/defaultBcg.jpeg'
import Hero from "../components/Hero";
import {Link} from "react-router-dom";

export default function Default(props) {
    return (
        <>
            <Hero img={defaultBg} title="404" max="true">
                <h2 className="text-uppercase">page not found</h2>
                <Link to="/" className="main-link"
                style={{marginTop:"2rem"}}>return home</Link>
            </Hero>
        </>
    );
}
