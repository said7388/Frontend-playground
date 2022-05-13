import React, { useEffect, useState } from 'react';
import { validateInput } from '../validation/inputValidation';
import './cssFormSaas.scss';

const CssLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        password: '',
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

    useEffect(() => {
        console.log({ email, password });
    }, [email, password]);

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Login</h1>
                <form>
                    <div className="input-container">
                        <input
                            name="email"
                            type="text" label="email"
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={checkValidity}
                            onFocus={handleFocus}
                            required="required" />
                        <label htmlFor="email">Email Address</label>
                        <div className="bar"></div>
                    </div>
                    <p className="error-message">{errorMessage?.email || ''}</p>

                    <div className="input-container">
                        <input type="password"
                            label="password"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={checkValidity}
                            onFocus={handleFocus}
                            required="required" />
                        <label htmlFor="password">Password</label>
                        <div className="bar"></div>
                    </div>
                    <p className="error-message">{errorMessage?.password || ''}</p>

                    <div className="button-container">
                        <button>
                            <span>LogIn</span>
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