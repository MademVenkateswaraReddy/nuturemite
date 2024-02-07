import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import './cart.css'

function Cart() {
    return (
        <section className='cart-container'>
            <div className="cart-context">
                <h2>Shopping Cart</h2>
                <h2><MdKeyboardArrowRight/></h2>
                <h2>Checkout</h2>
                <h2><MdKeyboardArrowRight/></h2>
                <h2>Order Complete</h2>
            </div>
            <div className="cart-area">
                <h1><RiShoppingBasketLine/></h1>
                <small>No products added to the Cart</small>
            </div>
            <div className="cart-button">
                <a href="shop">return to shop</a>
            </div>
        </section>
    )
}

export default Cart
