import React from "react"
import "./navbarStyle.css"
import logo from "../level99-logo.svg"
import cart from "../cart.png"
import user from "../user.png"
//import cartIcon from "./cartWidget"
import ShoppingCart from "./cartWidget"

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
                {/* <img src={user} alt="Pagina de Usuario" /> */}
                <div className="cartIcon"><ShoppingCart /></div>
            </div>
        </header>
        </>
    )}

export default Navbar