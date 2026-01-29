import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice';

const ProductCard = ({ plant }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const isInCart = cartItems.some(item => item.name === plant.name);

    const handleAddToCart = () => {
        dispatch(addItem(plant));
    };

    return (
        <div className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <div className="product-details">
                <h3 className="product-name">{plant.name}</h3>
                <p className="product-description">{plant.description}</p>
                <span className="product-cost">{plant.cost}</span>
                <button
                    className="add-to-cart-btn"
                    onClick={handleAddToCart}
                    disabled={isInCart}
                >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
