import React from 'react';
import './Login.css';
import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";


const Login = () => {
    return (
        <section>
            <div className='container'>
                <form action="">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="">Username</label>

                        <div className="input-text">
                            <div className="user">
                                <FaRegUser className='user-icon' />
                            </div>
                            <input
                                type="text"
                                placeholder='Type your username'
                            />

                        </div>
                    </div>

                    <div className="input-group second-input">
                        <label htmlFor="">Password</label>

                        <div className="input-text">
                            <div className="user">
                                <MdOutlineLock className='user-icon' />
                            </div>
                            <input
                                type="text"
                                placeholder='Type your password'
                            />

                        </div>
                    </div>

                    <div className="forgot">
                        <a href=''>Forgot password?</a>
                    </div>

                    <button>LOGIN</button>
                    <div className="text1">Or Sign Up Using</div>
                    <div className="icons">
                        <a href="" className='fb'>
                            <FaFacebookF className='facebook' />
                        </a>
                        <a href="" className='tw'> <FaTwitter className='twitter' /></a>
                        <a href="" className='gl'> <FaGoogle className='twitter' /></a>
                    </div>

                    <div className="sign">
                        <a href="signUp">SIGN UP</a>
                    </div>

                </form>

            </div>

        </section>
    )
}


export default Login





