import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css'
import { auth, provider } from '../firebase';

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.massage));
    }
    return (
        <div className="login">
            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/IMessage_logo.svg"
                    alt="logo"
                />
                <h1><span>i</span> Massage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;