import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-content">
                <h1>Welcome To Paradise Nursery</h1>
                <p>Where Green Meets Serenity</p>
                <p>At Paradise Nursery, we provide the finest selection of houseplants to purify your air and uplift your spirit. Explore our curated collection of aromatic, medicinal, and air-purifying plants.</p>
                <Link to="/products">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
