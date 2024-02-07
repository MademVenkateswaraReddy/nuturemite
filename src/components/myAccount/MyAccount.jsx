import React, { useState } from 'react'
import './myaccount.css'

function MyAccount() {
    const [showRegistration, setShowRegistration] = useState(false)

    const radioClick = () =>{
        setShowRegistration(true)
    }
    const custClick = () =>{
        setShowRegistration(false)
    }
    return (
        <section className='account-container'>
            <div className="login-section">
                <h3>Login</h3>
                <div className="user">
                    <label>Username or email address <span>*</span></label>
                    <input type="text" required/>
                </div>
                <div className="password">
                    <label>Password <span>*</span></label>
                    <input type="password" required/>
                </div>
                <div className="forgot">
                    <div className="remember">
                        <input type="checkbox" />
                        <small>Remember me</small>
                    </div>
                        <a href="#">Forgot Password?</a>
                </div>
                <button>Login</button>
            </div>
            <div className="register-section">
                 <h3>Register</h3>
                 <label>Email Address <span>*</span></label>
                 <input type="email" required/>
                 <p>A link set a new password will be sent to your email address.</p>
                 <div className="validity-section">
                    <label><input onClick={custClick} type="radio" name='customer-vendor' />I am a customer</label>
                    <label htmlFor='vendor'><input onClick={radioClick} id='vendor' type="radio" name='customer-vendor' />I am a vendor</label>
                    {
                        showRegistration && (
                            <form>
                                <div className="user-first">
                                    <label>First Name <span>*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="user-last">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="user-shop">
                                    <label>Shop Name <span>*</span></label>
                                    <input type="text" required/>
                                </div>
                                <div className="user-url">
                                    <label>Shop URL <span>*</span></label>
                                    <input type="url" required/>
                                    <p>https://nuturemite.info/store/</p>
                                </div>
                                <div className="phone-number">
                                    <label>Phone Number <span>*</span></label>
                                    <input type="tel" required/>
                                </div>
                            </form>
                        )
                    }
                    <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                    <button>register</button>
                 </div>
            </div>
        </section>
    )
}

export default MyAccount
