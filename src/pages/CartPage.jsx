import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const CartPage = () => {
    const cartItems = useSelector(state => state.cart.items);

    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => {
            const itemCost = parseFloat(item.cost.replace('$', ''));
            return total + itemCost * item.quantity;
        }, 0);
    };

    return (
        <div className="cart-page">
            <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2rem', color: '#2E7d32' }}>Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <h3>Your cart is empty.</h3>
                    <Link to="/products">
                        <button className="continue-btn" style={{ marginTop: '1rem' }}>Start Shopping</button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cartItems.map((item) => (
                            <CartItem key={item.name} item={item} />
                        ))}
                    </div>

                    <div className="total-cart-amount">
                        <p>Total Cart Amount: ${calculateTotalAmount()}</p>
                    </div>

                    <div className="cart-actions">
                        <Link to="/products">
                            <button className="continue-btn">Continue Shopping</button>
                        </Link>
                        <button
                            className="checkout-btn"
                            onClick={() => alert('Checkout functionality coming soon!')}
                        >
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
