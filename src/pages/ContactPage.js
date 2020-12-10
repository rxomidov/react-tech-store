import React from 'react';
import contactImg from '../images/contactBcg.jpeg'
import Hero from "../components/Hero";
import Contact from "../components/ContactPage/Contact";
function ContactPage(props) {
    return (
        <>
            <Hero img={contactImg}/>
            <Contact/>
        </>
    );
}

export default ContactPage;