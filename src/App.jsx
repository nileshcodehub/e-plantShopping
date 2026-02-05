import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './ProductList';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<div className="landing-page">
          <div className="landing-content">
            <h1>Welcome To Paradise Nursery</h1>
            <p>Where Green Meets Serenity</p>
            <p>At Paradise Nursery, we provide the finest selection of houseplants to purify your air and uplift your spirit. Explore our curated collection of aromatic, medicinal, and air-purifying plants.</p>
            <Link to="/products">
              <button className="get-started-btn">Get Started</button>
            </Link>
          </div>
        </div>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem onContinueShopping={() => navigate('/products')} />} />
      </Routes>
    </div>
  );
}

export default App;
