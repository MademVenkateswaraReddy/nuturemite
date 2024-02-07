import React from 'react'
import './sidenav.css'
import data from '../../data';
import { CiStar } from "react-icons/ci";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';

export const SideNav = () => {
    return (
        <section className='nav-container'>
            <aside className='side-nav'>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>View All</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Antioxidants</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Ayurvedic</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Digestive Health</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>General Health</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Herbal, Speciality Suppliments</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Immune health</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Men Health</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Organic</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Personal Care</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Sexual Health</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Vitamins & Minerals</a>
                </div>
                <div className="item">
                    <input type="checkbox" value='view' id='view' />
                    <a href='#' id='view'>Women Health</a>
                </div>
            </aside>

            <div className="item-container">
                <Carousel className='card-container'>
                {
                    data.map((item) => (
                        <div className='card' key={item.Image}>
                            <img className='item-img' src={item.Image} alt="item" />
                            <div className="card-text">
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
                        </div>
                    ))
                }
                </Carousel>

            </div>
        </section>
    )
}
