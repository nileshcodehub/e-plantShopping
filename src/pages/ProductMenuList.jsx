import React from 'react';
import { plants } from '../data/plants';
import ProductCard from '../components/ProductCard';

const ProductMenuList = () => {
    return (
        <div className="product-menu">
            {plants.map((category, index) => (
                <div key={index} className="category-section">
                    <h2 className="category-title">{category.category}</h2>
                    <div className="product-grid">
                        {category.plants.map((plant, plantIndex) => (
                            <ProductCard key={plantIndex} plant={plant} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductMenuList;
