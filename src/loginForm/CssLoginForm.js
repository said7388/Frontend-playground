import React, { useEffect, useState } from 'react';
import './cssForm.css';

const CssLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    useEffect(() => {
        console.log({ email, password });
    }, [email, password]);

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Login</h1>
                <form>
                    <div className="input-container">
                        <input type="text" label="username" required="required" />
                        <label htmlFor="username">Username</label>
                        <div className="bar"></div>
                    </div>

                    <div className="input-container">
                        <input
                            onChange={(e) => setEmail(e.target.value)} type="text" label="email"
                            required="required" />
                        <label htmlFor="email">Email Address</label>
                        <div className="bar"></div>
                    </div>

                    <div className="input-container">
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            label="password"
                            required="required" />
                        <label htmlFor="password">Password</label>
                        <div className="bar"></div>
                    </div>

                    <div className="button-container">
                        <button>
                            <span>Go</span>
                        </button>
                    </div>
                    <div className="footer">
                        <a href="/">Forgot your password?</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CssLoginForm;