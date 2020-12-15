//import {FaHome} from "react-icons/all";
import './App.css';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

import {Route, Switch} from 'react-router-dom'
import SingleProductPage from "./pages/SingleProductPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Default from "./pages/Default";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";



class App extends Component {
    render() {
        return (
            <>
                {/*  */}
                <Navbar/>
                <Sidebar/>
                <SideCart/>
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route path="/products" component={ProductsPage}/>
                    <Route path="/product/:id" exact component={SingleProductPage}/>
                    <Route path="/cart" component={CartPage}/>
                    <Route component={Default}/>
                </Switch>
                <Footer/>
            </>
        );
    }
}

export default App;
