import { connectStorageEmulator } from 'firebase/storage';
import React from 'react';

// Godson

type CartProducts = {
  id: string
  image: string;
  title: string;
  price: number;
  quantity: number;
  index?: number;
}

interface CartInformationProps {
  products: CartProducts[],
  updateProducts: React.Dispatch<React.SetStateAction<CartProducts[]>>
  updateTotal: React.Dispatch<React.SetStateAction<number>>
}


const CartProduct: React.FC<CartProducts & CartInformationProps> = ({
  image,
  title,
  price,
  quantity = 1,
  updateProducts,
  updateTotal,
  id,
  products,
  index
}) => {
  const [productQuantity, setQuantity] = React.useState(quantity);

  const updateTotalPrice = (quantity: number, index: number) => {
    setQuantity(quantity);
    const updatedProducts = products;
    updatedProducts[index].quantity = quantity;
    updateProducts(updatedProducts);
    const mapped = products
      .map((product) => {
        if (product.id === id) {
          return (product.price * quantity);
        } else {
          return (product.price * product.quantity);
        }
      });
    const total = mapped
      .reduce((prev, next) => prev + next);
    updateTotal(total);
  };

  return (
    <tr>
      <td className="product-col">
        <div className="product">
          <figure className="product-media">
            <a href="#">
              <img
                src={image}
                alt="Product image"
              />
            </a>
          </figure>

          <h3 className="product-title">
            <a href="#">{title}</a>
          </h3>
          {/* <!-- End .product-title --> */}
        </div>
        {/* <!-- End .product --> */}
      </td>
      <td className="price-col">${price}</td>
      <td>
        <span
          className='icon-minus mr-2'
          onClick={() => updateTotalPrice(productQuantity - 1, index ?? 0)}
          style={{ cursor: 'pointer' }}></span>
        <span className='mx-2'>{productQuantity}</span>
        <span
          className="icon-plus ml-2"
          onClick={() => updateTotalPrice(productQuantity + 1, index ?? 0)}
          style={{ cursor: 'pointer' }}></span>
      </td>
      <td className="total-col">${Math.ceil(productQuantity * price)}</td>
      <td className="remove-col">
        <button className="btn-remove">
          <i className="icon-close"></i>
        </button>
      </td>
    </tr>
  );
};

const CartInformation: React.FC<CartInformationProps> = ({
  products,
  updateTotal,
  updateProducts
}) => {

  return (
    <div className="col-lg-9">
      <table className="table table-cart table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products && products.map((product, index) => (
            <CartProduct
              key={index}
              id={product.id}
              products={products}
              index={index}
              updateTotal={updateTotal}
              image={product.image}
              price={product.price}
              title={product.title}
              updateProducts={updateProducts}
              quantity={product.quantity}
            />
          ))}
        </tbody>
      </table>
      {/* <!-- End .table table-wishlist --> */}

      <div className="cart-bottom">
        <div className="cart-discount">
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                required
                placeholder="coupon code"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary-2" type="submit">
                  <i className="icon-long-arrow-right"></i>
                </button>
              </div>
              {/* <!-- .End .input-group-append --> */}
            </div>
            {/* <!-- End .input-group --> */}
          </form>
        </div>
        {/* <!-- End .cart-discount --> */}

        <a href="#" className="btn btn-outline-dark-2">
          <span>UPDATE CART</span>
          <i className="icon-refresh"></i>
        </a>
      </div>
      {/* <!-- End .cart-bottom --> */}
    </div>
  );
};

export default CartInformation;
