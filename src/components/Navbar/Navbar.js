import "./Navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import basket_icon from "../../../src/assets/basket_icon.png"
import food9 from "../../../src/assets/food_9.png"
import { FaBars, FaHamburger } from "react-icons/fa";
import { CgClose } from "react-icons/cg";


const Navbar = () => {
    let [isRes, setIsRes] = useState(false)
    console.log(isRes)
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src={basket_icon} alt="" />
                    <span id="name">Restaurant</span>
                </div>
                {!isRes && <div className="ham" onClick={() => setIsRes(!isRes)}>
                    <FaBars/>
                </div>}
                <div className={`${isRes ? "mobile" : "routes"}`} onClick={() => setIsRes(false)}>
                    {isRes && <div className="cross">
                        <CgClose />
                    </div>}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;