import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from './components/Products/CartContext';

function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      <Footer />
      </Router>
    </CartProvider>
  </>
  );
}

export default App;


