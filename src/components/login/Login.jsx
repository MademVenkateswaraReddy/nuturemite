import React, { useState } from 'react';
import './login.css';

function Login() {
    const [showLogin, setShowLogin] = useState(true);

    const toggleLoginRegister = () => {
        setShowLogin(!showLogin);
    };

    return (
        <section className='login-section'>
            <div className="login-container" style={{ display: showLogin ? 'block' : 'none' }}>
                <h3>Login</h3>
                <div className="user-section">
                    <label htmlFor="username">Username or Email Address <span>*</span></label>
                    <input type="text" id='username' required/>
                </div>
                <div className="password-section">
                    <label htmlFor="password">Password <span>*</span></label>
                    <input type="password" id='password' required/>
                    <div className="forgot">
                        <label><input type="checkbox" /> Remember Me</label>
                        <a href="#">Forgot Password</a>                        
                    </div>
                </div>
                <button>Login</button>

                <a href="#" onClick={toggleLoginRegister}>Register Now!</a>
            </div>

            <div className="login-container" style={{ display: showLogin ? 'none' : 'block' }} id='register'>
                <h3>New User</h3>
                <div className="user-section">
                    <label htmlFor="username">Username or Email Address <span>*</span></label>
                    <input type="text" id='username' required/>
                </div>
                <div className="password-section">
                    <label htmlFor="password">Password <span>*</span></label>
                    <input type="password" id='password' required/>
                    <div className="forgot">
                        <label><input type="checkbox" /> Save Password</label>                       
                    </div>
                </div>
                <button>Register Now</button>

                <a href="#" onClick={toggleLoginRegister}>Back to Login</a>
            </div>
        </section>
    )
}

export default Login;
