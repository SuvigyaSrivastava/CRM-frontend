import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import the auth object from firebase.js
import './Home.css';
import logo from '../logo.png'; // Update with the correct path to the cropped logo

const Home = () => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);

    // Function to handle user logout
    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                // Redirect to the login page after logout
                navigate('/');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const { displayName, photoURL } = user;
            setUserProfile({ displayName, photoURL });
        } else {
            setError('User not authenticated');
        }
    }, []);

    return (
        <div className="home-container">
            <h1>Welcome to Xeno Mini CRM</h1>
            <img src={logo} alt="Xeno Logo" className="logo" />
            {error && <p>{error}</p>}
            {userProfile && (
                <div className="user-info">
                    {/* Display user's Gmail account image */}
                    {userProfile.photoURL && <img src={userProfile.photoURL} alt="User" />}
                    <p>{userProfile.displayName}</p>
                </div>
            )}
            <button onClick={handleLogout}>Logout</button>
            <button onClick={() => navigate('/create-campaign')}>Create Campaign</button>
            <button onClick={() => navigate('/campaigns')}>Manage Campaigns</button>
        </div>
    );
};

export default Home;
