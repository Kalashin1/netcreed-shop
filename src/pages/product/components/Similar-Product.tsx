import React from 'react';

type ProductProps = {
  imageURL: string;
  category: string;
  label: string;
  title: string;
  price: number;
  reviews: number;
  colors: Array<{
    hex: string;
    title: string;
  }>
}

const SimilarProducts = () => {

  const Product = () => {
    return (
      <div className="product product-7 text-center">
        <figure className="product-media">
          <span className="product-label label-new">New</span>
          <a href="product.html">
            <img
              src="assets/images/products/product-4.jpg"
              alt="Product image"
              className="product-image"
            />
          </a>

          <div className="product-action-vertical">
            <a
              href="#"
              className="btn-product-icon btn-wishlist btn-expandable"
            >
              <span>add to wishlist</span>
            </a>
            <a
              href="popup/quickView.html"
              className="btn-product-icon btn-quickview"
              title="Quick view"
            >
              <span>Quick view</span>
            </a>
            <a
              href="#"
              className="btn-product-icon btn-compare"
              title="Compare"
            >
              <span>Compare</span>
            </a>
          </div>
          {/* <!-- End .product-action-vertical --> */}

          <div className="product-action">
            <a href="#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
          </div>
          {/* <!-- End .product-action --> */}
        </figure>
        {/* <!-- End .product-media --> */}

        <div className="product-body">
          <div className="product-cat">
            <a href="#">Women</a>
          </div>
          {/* <!-- End .product-cat --> */}
          <h3 className="product-title">
            <a href="product.html">
              Brown paperbag waist <br />
              pencil skirt
            </a>
          </h3>
          {/* <!-- End .product-title --> */}
          <div className="product-price">$60.00</div>
          {/* <!-- End .product-price --> */}
          <div className="ratings-container">
            <div className="ratings">
              <div className="ratings-val" style={{ width: '20%' }}></div>
              {/* <!-- End .ratings-val --> */}
            </div>
            {/* <!-- End .ratings --> */}
            <span className="ratings-text">( 2 Reviews )</span>
          </div>
          {/* <!-- End .rating-container --> */}

          <div className="product-nav product-nav-dots">
            <a href="#" className="active" style={{ background: '#cc9966' }}>
              <span className="sr-only">Color name</span>
            </a>
            <a href="#" style={{ background: '#333333' }}>
              <span className="sr-only">Color name</span>
            </a>
            <a href="#" style={{ background: '#806b3e' }}>
              <span className="sr-only">Color name</span>
            </a>
          </div>
          {/* <!-- End .product-nav --> */}
        </div>
        {/* <!-- End .product-body --> */}
      </div>
    );
  };


  return (
    <>
      <h2 className="title text-center mb-4">You May Also Like</h2>
      {/* <!-- End .title text-center --> */}
      <div
        className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
        data-toggle="owl"
        data-owl-options={`{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "480": {
                                    "items":2
                                },
                                "768": {
                                    "items":3
                                },
                                "992": {
                                    "items":4
                                },
                                "1200": {
                                    "items":4,
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }`}
      >
        <Product />
      </div>
    </>
  );
};

export default SimilarProducts;
