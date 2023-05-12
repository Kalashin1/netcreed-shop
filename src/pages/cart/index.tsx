import React from 'react';
import Layout from '../shop/Layout';
import CartInformation from './components/Cart-Info';
import CartSummary from './components/Cart-Summary';

const Cart = () => {
  return (
    <Layout>
      <div className="cart">
        <div className="container">
          <div className="row">
            <CartInformation></CartInformation>
            <CartSummary></CartSummary>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
