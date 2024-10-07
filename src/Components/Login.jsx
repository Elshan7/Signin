import React, { useState } from 'react';
import './Login.css';
import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const checkApi = async () => {
        const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/users");
        const users = res.data;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            navigate(`/welcome/${user.id}`);
        } else {
            setError('Invalid username or password');
        }
};


const handleSubmit = (e) => {
    e.preventDefault(); 
    checkApi(); 
};


    return (
        <section>
            <div className='container'>
                <form action="" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="">Username</label>

                        <div className="input-text">
                            <div className="user">
                                <FaRegUser className='user-icon' />
                            </div>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                    <div className="sign" onClick={() => navigate("/signUp")}>
                        <a href="">SIGN UP</a>
                    </div>

                </form>

            </div>

        </section>
    )
}


export default Login