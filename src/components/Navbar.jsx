import React from "react"
import "./styles/navbarStyle.css"
import logo from "../assets/level99-logo.svg"
import ShoppingCart from "./CartWidget"
import { Link } from "react-router-dom"

const Navbar = () =>{
    return(
        <>
        <header className="navBar">
            <img src={logo} alt="Logo level99" />
            <nav>
                <a href="#">HOME</a>
                <a href="#">PlayStation</a>
                <a href="#">Nintendo</a>
                <a href="#">XBOX</a>
                <a href="#">PC</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
            </nav>
            <div>
                <div className="cartIcon"><ShoppingCart /></div>
            </div>
        </header>
        </>
    )}

export default Navbar