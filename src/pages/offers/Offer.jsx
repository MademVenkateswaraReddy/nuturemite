import React from 'react'
import data from '../../data'
import { CiStar } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import './offer.css'

function Offer() {
    return (
        <section className='of-container'>
            <h1 className='container-head'>Special Offers</h1>
            <p className='container-text'>All our new arrivals in exclusive brand selection</p>
            <div className="product-container">
                <h1>exclusive product</h1>
                <Carousel className='card-container'>
                    {
                        data.map((item) => (
                            <div className='card' key={item.Image}>
                                <img className='item-img' src={item.Image} alt="item" />
                                <p className="type">{item.type}</p>
                                <p className="discount">{item.discount}</p>
                                <h4>{item.brand}</h4>
                                <h2>{item.name}</h2>
                                <p>
                                    <span><CiStar /></span>
                                    <span><CiStar /></span>
                                    <span><CiStar /></span>
                                    <span><CiStar /></span>
                                    <span><CiStar /></span>
                                </p>
                                <p><del><BsCurrencyRupee />{item.cost}</del><span><BsCurrencyRupee />{item.discount1}</span></p>
                                <div className="cart-link">
                                    <a href="#"><FaCartPlus /></a>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </section>
    )
}

export default Offer
