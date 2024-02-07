import React from 'react'
import data from '../../data'
import { CiStar } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import './items.css'

function Items() {
    return (
        <section className='sp-container'>
            <h1 className='container-head'>This week's specials</h1>
            <p className='container-text'>All our new arrivals in a exclusive brand selection</p>
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
                            <p><del><BsCurrencyRupee/>{item.cost}</del><span><BsCurrencyRupee/>{item.discount1}</span></p>
                            <div className="cart-link">
                                <a href="#"><FaCartPlus/></a>
                            </div>
                        </div>
                    ))
                }
                </Carousel>
        </section>
    )
}

export default Items
