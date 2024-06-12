import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AudienceForm from './components/AudienceForm';
import CampaignList from './components/CampaignList';

import GoogleLoginComponent from './components/GoogleLoginComponent';
import PrivateRoute from './components/PrivateRoute';
import { auth } from './firebase';
import './App.css';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLoginSuccess = (user) => {
        console.log("Logged in user: ", user);
        setUser(user);
    };

    return (
        <Router>
            <div>
                {!user ? (
                    <Routes>
                        <Route path="*" element={<GoogleLoginComponent onLoginSuccess={handleLoginSuccess} />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-campaign" element={<PrivateRoute isAuthenticated={!!user}><AudienceForm userProfile={user} /></PrivateRoute>} />
                        <Route path="/campaigns" element={<PrivateRoute isAuthenticated={!!user}><CampaignList userProfile={user} /></PrivateRoute>} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
