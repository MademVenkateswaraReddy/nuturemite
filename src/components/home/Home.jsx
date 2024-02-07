import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css'
import { SideNav } from '../../pages/sidebarSection/SideNav';
import Items from '../../pages/items/Items';
import Adds from '../../pages/adds/Adds';
import Offer from '../../pages/offers/Offer';

function Home() {
    return (
        <section className='home-container'>
            <Carousel className='corousal'>
                <div className='cor-container'>
                    <h3>Exclusive Product New Arrival</h3>
                    <h1>Fit Low Carb</h1>
                    <h2>Candy Bar</h2>
                    <p>Breakfast products on sale</p>
                    <h1>UP TO<span className='blinking-text'>70%</span></h1>
                </div>
                <div className='cor-container'>
                <h3>Exclusive Product New Arrival</h3>
                    <h1>organic coffee</h1>
                    <h2>special blend</h2>
                    <p>Breakfast products on sale</p>
                    <h1>UP TO<span className='blinking-text'>50%</span></h1>
                </div>
            </Carousel>
            <SideNav />
            <Items />
            <Adds />
            <Offer />
        </section>
    )
}

export default Home
