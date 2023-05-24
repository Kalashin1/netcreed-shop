import React from 'react';

type ProductProps = {
  imageURL: string;
  category: string;
  title: string;
  price: number;
  review: number;
  otherImageURL: string[]
}

const Product = (Props: Partial<ProductProps>) => {
  return (
    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
      <div className="product product-7 text-center">
        <figure className="product-media">
          <span className="product-label label-new">New</span>
          <a href="product.html">
            <img
              src="assets/images/products/product-4.jpg"
              alt="Product"
              className="product-image"
            />
          </a>

          <div className="product-action-vertical">
            <a
              href="!#"
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
              href="!#"
              className="btn-product-icon btn-compare"
              title="Compare"
            >
              <span>Compare</span>
            </a>
          </div>
          {/* <!-- End .product-action-vertical --> */}

          <div className="product-action">
            <a href="!#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
          </div>
          {/* 
            // <!-- End .product-action --> */}
        </figure>
        {/* <!-- End .product-media --> */}

        <div className="product-body">
          <div className="product-cat">
            <a href="!#">Women</a>
          </div>
          {/* <!-- End .product-cat --> */}
          <h3 className="product-title">
            <a href="product.html">Brown paperbag waist pencil skirt</a>
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

          <div className="product-nav product-nav-thumbs">
            <a href="!#" className="active">
              <img
                src="assets/images/products/product-4-thumb.jpg"
                alt="product desc"
              />
            </a>
            <a href="!#">
              <img
                src="assets/images/products/product-4-2-thumb.jpg"
                alt="product desc"
              />
            </a>

            <a href="!#">
              <img
                src="assets/images/products/product-4-3-thumb.jpg"
                alt="product desc"
              />
            </a>
          </div>
          {/* <!-- End .product-nav --> */}
        </div>
        {/* <!-- End .product-body --> */}
      </div>
      {/* <!-- End .product --> */}
    </div>
  );
};

const Products = () => {
  return (
    <div className="products mb-3">
      <div className="row justify-content-center">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
