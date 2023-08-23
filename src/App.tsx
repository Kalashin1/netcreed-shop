/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import Category from './pages/product/category';
import Order from './pages/order/';
import { getCurrentUser } from './pages/auth/actions';

import { User } from 'firebase/auth';

let _user: User | null;

export const AuthContext = React.createContext<{
  user: User | null,
  getLoggedInUser?: (userId?: string) => Promise<User | null>
    }>({
      user: null
    });

function App() {
  const [user, setUser] = React.useState<typeof _user | null>(_user);

  const getLoggedInUser = async (userId?: string) => {
    const [loggedInUser, err] = await getCurrentUser();

    if (loggedInUser) {
      setUser(loggedInUser);
      return loggedInUser;
    }

    if (err || userId) {
      return null;
    }

    return null;
  };

  React.useEffect(() => {
    getLoggedInUser(localStorage.getItem('userId')!).then((_user) => {
      console.log(_user);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, getLoggedInUser }}>
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
          <Route path='/category' element={<Category />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
