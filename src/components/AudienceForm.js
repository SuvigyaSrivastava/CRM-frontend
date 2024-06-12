import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AudienceForm.css';
import logo from '../logo.png';

const AudienceForm = ({ userProfile }) => {
    const [campaignName, setCampaignName] = useState('');
    const [rules, setRules] = useState([{ field: 'Total Spends', operator: 'Greater or Equals', value: '', logic: 'AND' }]);
    const [audienceSize, setAudienceSize] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        calculateAudienceSize();
    }, [rules]);

    const calculateAudienceSize = () => {
        // Dummy value for now
        let size = 1000;
        setAudienceSize(size);
    };

    const handleAddRule = () => {
        setRules([...rules, { field: 'Total Spends', operator: 'Equals', value: '', logic: 'AND' }]);
    };

    const handleRemoveRule = (index) => {
        setRules(rules.filter((_, i) => i !== index));
    };

    const handleChangeRule = (index, field, value) => {
        const newRules = [...rules];
        newRules[index][field] = value;
        setRules(newRules);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const campaignDetails = {
            name: campaignName,
            message: 'Happy Birthday!',
            rules: rules
        };
    
        try {
            // Make an HTTP POST request to your backend API endpoint
            const response = await axios.post('http://localhost:4000/api/campaign/create', campaignDetails);
            console.log('Campaign created successfully:', response.data);
            console.log(response.status)
            
            // Check if the audience was created successfully (you might need to adjust this based on your backend response)
            if (response.status === 201) {
                console.log('Audience created successfully:', response.data);
                // Redirect to the campaign list page after successful creation
                navigate('/campaigns');
            } else {
                console.error('Failed to create audience:', response.data);
            }
        } catch (error) {
            console.error('Error creating audience:', error);
        }
    };

    return (
        <div className="form-container">
            <img src={logo} alt="Xeno Logo" className="logo" />
            {userProfile && (
                <div className="user-info">
                    <img src={userProfile.photoURL} alt="User" />
                    <p>{userProfile.displayName}</p>
                </div>
            )}
            <h2>Create Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Campaign Name</label>
                    <input type="text" value={campaignName} onChange={(e) => setCampaignName(e.target.value)} required />
                </div>
                <h3>Add Campaign Audience Rules</h3>
                {rules.map((rule, index) => (
                    <div key={index} className="rule-container">
                        <select value={rule.field} onChange={(e) => handleChangeRule(index, 'field', e.target.value)}>
                            <option value="Total Spends">Total Spends</option>
                            <option value="Last Order Date">Last Order Date</option>
                            <option value="Country">Last Visit</option>
                            {/* Add more fields as needed */}
                        </select>
                        <select value={rule.operator} onChange={(e) => handleChangeRule(index, 'operator', e.target.value)}>
                            <option value="Greater or Equals">Greater</option>
                            <option value="Equals">Equals</option>
                            <option value="Equals">Less Than</option>
                            {/* Add more operators as needed */}
                        </select>
                        <input type="number" value={rule.value} onChange={(e) => handleChangeRule(index, 'value', e.target.value)} required />
                        <select value={rule.logic} onChange={(e) => handleChangeRule(index, 'logic', e.target.value)}>
                            <option value="AND">AND</option>
                            <option value="OR">OR</option>
                        </select>
                        <button type="button" onClick={() => handleRemoveRule(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddRule}>Add Rule</button>
                <button type="submit">Send Campaign</button>
                <div className="audience-size">Audience Size: {audienceSize}</div>
            </form>
        </div>
    );
};

export default AudienceForm;
