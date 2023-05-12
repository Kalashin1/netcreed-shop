import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages';
import Shop from './pages/shop';
import Product from './pages/product';
import Login from './pages/auth';
import Cart from './pages/cart';
import WishList from './pages/wishlist';
import Checkout from './pages/checkout';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
