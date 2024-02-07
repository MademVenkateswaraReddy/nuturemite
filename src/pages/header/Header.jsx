import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiPhone } from "react-icons/ti";
import { MdSearch } from "react-icons/md";
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTwitter } from "react-icons/tb";
import { FaYoutube, FaBars, FaTimes } from "react-icons/fa"; // Import FaTimes
import { IoLogoInstagram } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import './header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [showIcons, setShowIcons] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
            setShowIcons(!e.matches); // Icons are hidden initially on mobile and tablet
        };

        handleMediaQueryChange(mediaQuery); // Initial check
        mediaQuery.addListener(handleMediaQueryChange); // Listen to changes

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange); // Cleanup
        };
    }, []);

    const toggleIcons = () => {
        setShowIcons(!showIcons);
        setIsMenuOpen(!isMenuOpen); // Toggle menu state simultaneously
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setShowIcons(!showIcons); // Toggle icons state simultaneously
    };

    return (
        <>
            <header className="container">
                <div className="header-container">
                    <div className="header-logo">
                        <img src="//nuturemite.info/wp-content/uploads/2022/10/nuturmite_logo_tranparent.png" alt="nuturemite" />
                    </div>
                    <div className="components">
                        <div className="contact-components">
                            <div className="contact-info">
                                <a href="#"><MdKeyboardArrowRight /> About Us</a>
                                <a href="#"><MdKeyboardArrowRight /> Contact Us</a>
                            </div>
                            <div className="contact-mobile">
                                <a href=""><TiPhone /> 8919993233</a>
                            </div>
                            <div className="contact-search">
                                <button><MdSearch className='icon' /></button>
                            </div>
                        </div>
                        <div className="component-pages">
                            <ul>
                                {showIcons && (
                                    <ul className={isMobile ? 'mobile-list' : ''}>
                                        <li><Link to="/" smooth={true} duration={500}>Home</Link></li>
                                        <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
                                        <li><Link to="shop" smooth={true} duration={500}>Shop</Link></li>
                                        <li><Link to="cart" smooth={true} duration={500}>Cart</Link></li>
                                        <li><Link to="my-account" smooth={true} duration={500}>My Account</Link></li>
                                        <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
                                        <li><Link to="login" smooth={true} duration={500}>Login</Link></li>
                                    </ul>
                                )}
                                <div className="contact-icons">
                                    <ul>
                                        <li><a href="#"><GrFacebookOption /></a></li>
                                        <li><a href="#"><TbBrandTwitter /></a></li>
                                        <li><a href="#"><FaYoutube /></a></li>
                                        <li><a href="#"><IoLogoInstagram /></a></li>
                                        <li><a href="#"><GrLinkedinOption /></a></li>
                                        <li><a href="#"><BsWhatsapp /></a></li>
                                    </ul>
                                </div>
                                        {isMobile && (
                                            <button onClick={isMenuOpen ? toggleMenu : toggleIcons}>
                                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                                            </button>
                                        )}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
