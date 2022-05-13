import React, { useEffect, useState } from 'react';
import { validateInput } from '../validation/inputValidation';
import './cssFormSaas.scss';

const CssSignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    });


    // Check input value validation
    const checkValidity = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const isValid = validateInput(name, value);
        if (isValid.hasError) {
            setErrorMessage({
                ...errorMessage,
                [name]: isValid.error
            })
        }
        console.log(errorMessage);
    }

    // handle change function
    const handleFocus = (e) => {
        const name = e.target.name;
        setErrorMessage({
            ...errorMessage,
            [name]: ''
        })
    }

    // check password matching
    const handleConfirmPassword = (e) => {
        if (password && e.target.value !== password) {
            setErrorMessage({
                ...errorMessage,
                confirm: "Password dosen't match !"
            })
        }
    }


    useEffect(() => {
        console.log({ email, password });
    }, [email, password]);

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Ragistration</h1>
                <form>
                    <div className="input-container">
                        <input type="text"
                            onBlur={checkValidity}
                            onFocus={handleFocus}
                            label="username"
                            name="username"
                            required="required" />
                        <label htmlFor="username">Username</label>
                        <div className="bar"></div>
                    </div>
                    <p className="error-message">{errorMessage?.username || ''}</p>

                    <div className="input-container">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={checkValidity}
                            onFocus={handleFocus}
                            type="text" label="email"
                            name="email"
                            required="required" />
                        <label htmlFor="email">Email Address</label>
                        <div className="bar"></div>
                    </div>
                    <p className="error-message">{errorMessage?.email || ''}</p>

                    <div className="input-container">
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={checkValidity}
                            onFocus={handleFocus}
                            label="password"
                            name='password'
                            required="required" />
                        <label htmlFor="password">Password</label>
                        <div className="bar"></div>
                    </div>
                    <p className="error-message">{errorMessage?.password || ''}</p>

                    <div className="input-container">
                        <input type="password"
                            onBlur={handleConfirmPassword}
                            onFocus={handleFocus}
                            label="confirm"
                            name="confirm"
                            required="required" />
                        <label htmlFor="confirm">Confirm Password</label>
                        <div className="bar"></div>
                    </div>
                    <p className="error-message">{errorMessage?.confirm || ''}</p>

                    <div className="button-container">
                        <button>
                            <span>SIGN UP</span>
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

export default CssSignupForm;