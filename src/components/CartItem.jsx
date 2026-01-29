import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrement = () => {
        if (item.quantity > 0) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        }
    };

    const handleRemove = () => {
        dispatch(removeItem(item.name));
    };

    // Convert cost string (e.g., "$15") to number for calculation
    const itemCost = parseFloat(item.cost.replace('$', ''));
    const totalCost = itemCost * item.quantity;

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-cost">Unit Price: {item.cost}</p>
                <div className="quantity-controls">
                    <button className="qty-btn" onClick={handleDecrement}>-</button>
                    <span>{item.quantity}</span>
                    <button className="qty-btn" onClick={handleIncrement}>+</button>
                </div>
                <div style={{ marginTop: '1rem', color: '#888' }}>
                    Subtotal: ${totalCost}
                </div>
            </div>
            <button className="delete-btn" onClick={handleRemove}>Delete</button>
        </div>
    );
};

export default CartItem;
