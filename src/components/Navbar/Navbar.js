import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import basket_icon from "../../../src/assets/basket_icon.png"
import food9 from "../../../src/assets/food_9.png"

const Navbar = () => {
    return (
        <>
        <div className="navbar">
            <div className="logo">
                <img src={basket_icon} alt="" />
                <span id="name">Restaurant</span>
            </div>
            <div className="routes">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/categories">Categories</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
        
        
        </>
    )
}

export default Navbar;