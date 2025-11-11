import { useState, useEffect } from "react";
import './App.css'

function RandomUser() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userCount, setUserCount] = useState(0);
    
    async function fetchUser() {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://randomuser.me/api/');

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.results && data.results.length > 0) {
                setUser(data.results[0]);

                setUserCount(prevCount => prevCount + 1);
            } else {
                throw new Error('No user data found in API rewsponse.');
            }

        } catch (error) {
            console.error('Fetch error:', error);
            setError('Failed to fetch user. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, [])

    const renderUserContent = () => {
        if (loading) {
            return (
                <div className="loading-text">
                    Loading user...
                </div>
            );
        }

        if (error) {
            return (
                <div className="error-box">
                    <p><strong>Error:</strong> {error}</p>
                </div>
            );
        }

        if (user) {
            const { name, email, phone, location, picture } = user;
            const fullname = `${name.title} ${name.first} ${name.last}`;
            const fullLocation = `${location.city}, ${location.country}`;

            return (
                <div className="user-profile">
                    <img src={picture.large} alt={`${fullname}'s profile`} className="profile-image" />

                    <h2 className="user-name">{fullname}</h2>
                    <p className="user-detail email">{email}</p>
                    <p className="user-detail">{phone}</p>
                    <p className="user-detail">{fullLocation}</p>
                </div>
            );
        }
    };

    return (
        <div className="app-container">
            <div className="profile-card">
                <h1 className="title">
                    👤 Random User Profile
                </h1>

                <div className="user-content-area">
                    {renderUserContent()}
                </div>

                <div className="button-section">
                    <button
                        onClick={fetchUser}
                        disabled={loading}
                        className="fetch-button"
                    >
                        {loading ? 'Loading...' : 'Get New User'}
                    </button>

                    <p className="user-counter">
                        Total users viwed: <span className="count-number">{userCount}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RandomUser;