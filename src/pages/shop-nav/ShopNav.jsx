import React from 'react'
import data from '../../data';
import { CiStar } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import { MdCurrencyRupee } from "react-icons/md";
import './shopnav.css'

function ShopNav() {
    return (
        <section className='nav-container'>
            <aside className='nav-aside'>
                <div className="input-filter">
                    <input type="range" />
                    <label>
                        <small><MdCurrencyRupee/>100 - <MdCurrencyRupee/>1000</small>
                        <button>Filter</button>
                    </label>
                </div>
                <div className="product-view">
                    <h2>Product categories</h2>
                    <ul>
                        <li><a href="#">Antioxidants</a>(25)</li>
                        <li><a href="#">Ayurvedic</a>(13)</li>
                        <li><a href="#">Digestive Health</a>(1)</li>
                        <li><a href="#">General Health</a>(3)</li>
                        <li><a href="#">Herbal, Speciality Suppliments</a>(4)</li>
                        <li><a href="#">Immune Health</a>(6)</li>
                        <li><a href="#">Men Health</a>(4)</li>
                        <li><a href="#">Organic</a>(1)</li>
                        <li><a href="#">Personal Care</a>(3)</li>
                        <li><a href="#">Sexual health</a>(3)</li>
                        <li><a href="#">Uncategorized</a>(1)</li>
                        <li><a href="#">Vitamins & Health</a>(4)</li>
                        <li><a href="#">Women Health</a>(6)</li>
                    </ul>
                </div>
            </aside>
            <div className="productlist">
            <div className='card-container'>
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
                </div>
            </div>
        </section>
    )
}

export default ShopNav
