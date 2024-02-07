import React from 'react'
import './shop.css'
import ShopNav from '../../pages/shop-nav/ShopNav'

function Shop() {
    return (
        <section className='shop-container'>
            <div className="nav-section">
                <div className="shop-head">
                    <h4>HOME</h4>
                    <h4>/ SHOP</h4>
                </div>
                <h1>Shop</h1>
            </div>
            <div className="shop-section">
                <ShopNav />
            </div>
        </section>
    )
}

export default Shop
