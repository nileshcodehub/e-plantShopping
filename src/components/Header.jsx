import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header">
            <div className="logo-section">
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Paradise Nursery
                </Link>
                <span>Where Green Meets Serenity</span>
            </div>
            <nav className="nav-links">
                <Link to="/products">Plants</Link>
                <Link to="/cart">
                    <div className="cart-icon">
                        🛒
                        {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
