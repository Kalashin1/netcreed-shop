import React from 'react';

interface RecommendationsProps {
  children?: React.ReactNode;
}

const Recommendations: React.FC<RecommendationsProps> = () => {
  return (
    <div className="container for-you">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">Recommendation For You</h2>
        </div>

        <div className="heading-right">
          <a href="!#" className="title-link">
            View All Recommendadion <i className="icon-long-arrow-right" />
          </a>
        </div>
      </div>

      <div className="products">
        <div className="row justify-content-center">
          <div className="col-6 col-md-4 col-lg-3">
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-sale">
                  Sale
                </span>
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-10.jpg"
                    alt="Product"
                    className="product-image"
                  />
                </a>

                <div className="product-action-vertical">
                  <a
                    href="!#"
                    className="btn-product-icon btn-wishlist"
                    title="Add to wishlist"
                  >
                    &nbsp;
                  </a>
                </div>
                {/* <!-- End .product-action --> */}

                <div className="product-action">
                  <a
                    href="!#"
                    className="btn-product btn-cart"
                    title="Add to cart"
                  >
                    <span>add to cart</span>
                  </a>
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                </div>
                {/* <!-- End .product-action --> */}
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Headphones</a>
                </div>
                {/* <!-- End .product-cat --> */}
                <h3 className="product-title">
                  <a href="product.html">
                    Beats by Dr. Dre Wireless Headphones
                  </a>
                </h3>
                {/* <!-- End .product-title --> */}
                <div className="product-price">
                  <span className="new-price">$279.99</span>
                  <span className="old-price">Was $349.99</span>
                </div>
                {/* <!-- End .product-price --> */}
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '40%' }} />
                    {/* <!-- End .ratings-val --> */}
                  </div>
                  {/* <!-- End .ratings --> */}
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
                {/* <!-- End .rating-container --> */}

                <div className="product-nav product-nav-dots">
                  <a
                    href="!#"
                    className="active"
                    style={{ background: '#666666' }}
                  >
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#ff887f' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#6699cc' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#f3dbc1' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#eaeaec' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                </div>
                {/* <!-- End .product-nav --> */}
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <div className="product product-2">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-11.jpg"
                    alt="Product"
                    className="product-image"
                  />
                </a>

                <div className="product-action-vertical">
                  <a
                    href="!#"
                    className="btn-product-icon btn-wishlist"
                    title="Add to wishlist"
                  >
                    &nbsp;
                  </a>
                </div>
                {/* <!-- End .product-action --> */}

                <div className="product-action">
                  <a
                    href="!#"
                    className="btn-product btn-cart"
                    title="Add to cart"
                  >
                    <span>add to cart</span>
                  </a>
                  <a
                    href="popup/quickView.html"
                    className="btn-product btn-quickview"
                    title="Quick view"
                  >
                    <span>quick view</span>
                  </a>
                </div>
                {/* <!-- End .product-action --> */}
              </figure>
              {/* <!-- End .product-media --> */}

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Cameras & Camcorders</a>
                </div>
                {/* <!-- End .product-cat --> */}
                <h3 className="product-title">
                  <a href="product.html">
                    GoPro - HERO7 Black HD Waterproof Action
                  </a>
                </h3>
                {/* <!-- End .product-title --> */}
                <div className="product-price">$349.99</div>
                {/* <!-- End .product-price --> */}
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }} />
                    {/* <!-- End .ratings-val --> */}
                  </div>
                  {/* <!-- End .ratings --> */}
                  <span className="ratings-text">( 2 Reviews )</span>
                </div>
                {/* <!-- End .rating-container --> */}
              </div>
              {/* <!-- End .product-body --> */}
            </div>
            {/* <!-- End .product --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
