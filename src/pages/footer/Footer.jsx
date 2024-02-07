import React from 'react'
import { GrFacebookOption } from "react-icons/gr";
import { TbBrandTwitter } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { GrLinkedinOption } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import './footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer-links">
                <div className="links">
                    <h3>customer service</h3>
                    <ul>
                        <li><a href="#">Help & FAQs</a></li>
                        <li><a href="#">Order Tracking</a></li>
                        <li><a href="#">Shopping & Delivery</a></li>
                        <li><a href="#">Orders History</a></li>
                        <li><a href="#">Advanced Search</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h3>About us</h3>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Our Stores</a></li>
                        <li><a href="#">Corporate Search</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="links">
                    <h3>more infromation</h3>
                    <ul>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Refer a Friend</a></li>
                        <li><a href="#">Student Beans Offers</a></li>
                        <li><a href="#">Gift Vouchers</a></li>
                    </ul>
                </div>
                <div className="contact-icons links">
                    <h3>social media</h3>
                    <ul>
                        <li><a href="#"><GrFacebookOption /></a></li>
                        <li><a href="#"><TbBrandTwitter /></a></li>
                        <li><a href="#"><FaYoutube /></a></li>
                        <li><a href="#"><IoLogoInstagram /></a></li>
                        <li><a href="#"><GrLinkedinOption /></a></li>
                        <li><a href="#"><BsWhatsapp /></a></li>
                    </ul>
                </div>
            </div>
            <div className="rights">
                <img src="//nuturemite.info/wp-content/themes/porto/images/logo/logo_footer.png" alt="footer" />
                <small>&copy;copyright, 2024: All rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
