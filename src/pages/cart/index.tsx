import React from 'react';
import Layout from '../shop/Layout';
import CartInformation from './components/Cart-Info';
import CartSummary from './components/Cart-Summary';

const _products = [
  {
    image: 'assets/images/products/table/product-1.jpg',
    title: 'Beige knitted elastic runner shoes',
    price: 84.0,
    quantity: 1,
    id: 'XSD234'
  },
  {
    image: 'assets/images/products/table/product-2.jpg',
    title: 'Jump Suits',
    price: 70.0,
    quantity: 1,
    id: 'XSD235'
  }
];

const Cart = () => {
  const _total = _products
    .map((product) => (product.price * product.quantity))
    .reduce((prev, next) => prev + next);

  const [total, setTotal] = React.useState(_total);
  const [products, setProducts] = React.useState(_products);
  
  return (
    <Layout
      breadCrumbSecondLevel='Cart'
      pageHeaderTitle='Your Shopping'
      pageHeaderSub='Cart'
    >
      <div className="cart">
        <div className="container">
          <div className="row">
            <CartInformation
              products={products}
              updateProducts={setProducts}
              updateTotal={setTotal}
            ></CartInformation>
            <CartSummary
              subTotal={total}
            ></CartSummary>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
