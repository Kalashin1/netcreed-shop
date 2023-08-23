import React from 'react';
import Layout from '../shop/Layout';
import CheckoutForm from './components/checkout';

const Checkout = () => {
  return (
    <Layout 
      breadCrumbSecondLevel='checkout'
      pageHeaderTitle='Checkout'
      pageHeaderSub='Kinanee'
    >
      <CheckoutForm></CheckoutForm>
    </Layout>
  );
};

export default Checkout;
