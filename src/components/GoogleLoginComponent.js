import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const GoogleLoginComponent = ({ onLoginSuccess }) => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            onLoginSuccess(user);
            navigate('/');
        } catch (error) {
            console.error("Error during login: ", error);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login with Google</button>
        </div>
    );
};

export default GoogleLoginComponent;
