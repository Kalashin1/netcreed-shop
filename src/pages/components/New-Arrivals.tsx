import React from 'react';

const NewArrivals = () => {
  return (
    <div className="container new-arrivals">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">New Arrivals</h2>
        </div>

        <div className="heading-right">
          <ul
            className="nav nav-pills nav-border-anim justify-content-center"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="new-all-link"
                data-toggle="tab"
                href="#new-all-tab"
                role="tab"
                aria-controls="new-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-tv-link"
                data-toggle="tab"
                href="#new-tv-tab"
                role="tab"
                aria-controls="new-tv-tab"
                aria-selected="false"
              >
                TV
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-computers-link"
                data-toggle="tab"
                href="#new-computers-tab"
                role="tab"
                aria-controls="new-computers-tab"
                aria-selected="false"
              >
                Computers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-phones-link"
                data-toggle="tab"
                href="#new-phones-tab"
                role="tab"
                aria-controls="new-phones-tab"
                aria-selected="false"
              >
                Tablets & Cell Phones
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-watches-link"
                data-toggle="tab"
                href="#new-watches-tab"
                role="tab"
                aria-controls="new-watches-tab"
                aria-selected="false"
              >
                Smartwatches
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="new-acc-link"
                data-toggle="tab"
                href="#new-acc-tab"
                role="tab"
                aria-controls="new-acc-tab"
                aria-selected="false"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="tab-content tab-content-carousel just-action-icons-sm">
        <div
          className="tab-pane p-0 fade show active"
          id="new-all-tab"
          role="tabpanel"
          aria-labelledby="new-all-link"
        >
          <div
            className="owl-carousel owl-full carousel-equal-height carousel-with-shadow"
            data-toggle="owl"
            data-owl-options={`{
                  "nav": true, 
                  "dots": true,
                  "margin": 20,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
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
                          "items":5
                      }
                  }
                }`}
          >
            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-top">
                  Top
                </span>
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-1.jpg"
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
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Laptops</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">MacBook Pro 13&rdquo; Display, i5</a>
                </h3>
                <div className="product-price">$1,199.99</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>

            <div className="product product-2">
              <figure className="product-media">
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-2.jpg"
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
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Audio</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Bose - SoundLink Bluetooth Speaker</a>
                </h3>
                <div className="product-price">$79.99</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }}></div>
                  </div>
                  <span className="ratings-text">( 6 Reviews )</span>
                </div>
              </div>
            </div>

            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-new">
                  New
                </span>
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-3.jpg"
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
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Tablets</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">
                    Apple - 11 Inch iPad Pro with Wi-Fi 256GB{' '}
                  </a>
                </h3>
                <div className="product-price">$899.99</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '80%' }}></div>
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>

                <div className="product-nav product-nav-dots">
                  <a href="!#" style={{ background: '#edd2c8' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#eaeaec' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a
                    href="!#"
                    className="active"
                    style={{ background: '#333333' }}
                  >
                    <span className="sr-only">Color name</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-top">
                  Top
                </span>
                <span className="product-label label-circle label-sale">
                  Sale
                </span>
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-4.jpg"
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
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Cell Phone</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">Google - Pixel 3 XL 128GB</a>
                </h3>
                <div className="product-price">
                  <span className="new-price">$35.41</span>
                  <span className="old-price">Was $41.67</span>
                </div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <span className="ratings-text">( 10 Reviews )</span>
                </div>

                <div className="product-nav product-nav-dots">
                  <a
                    href="!#"
                    className="active"
                    style={{ background: '#edd2c8' }}
                  >
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#eaeaec' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                  <a href="!#" style={{ background: '#333333' }}>
                    <span className="sr-only">Color name</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-top">
                  Top
                </span>
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-5.jpg"
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
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">TV & Home Theater</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">
                    Samsung - 55&rdquo; Class LED 2160p Smart
                  </a>
                </h3>
                <div className="product-price">$899.99</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div className="ratings-val" style={{ width: '60%' }}></div>
                  </div>
                  <span className="ratings-text">( 5 Reviews )</span>
                </div>
              </div>
            </div>

            <div className="product product-2">
              <figure className="product-media">
                <span className="product-label label-circle label-top">
                  Top
                </span>
                <a href="product.html">
                  <img
                    src="assets/images/demos/demo-4/products/product-1.jpg"
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
              </figure>

              <div className="product-body">
                <div className="product-cat">
                  <a href="!#">Laptops</a>
                </div>
                <h3 className="product-title">
                  <a href="product.html">MacBook Pro 13&rdquo; Display, i5</a>
                </h3>
                <div className="product-price">$1,199.99</div>
                <div className="ratings-container">
                  <div className="ratings">
                    <div
                      className="ratings-val"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                  <span className="ratings-text">( 4 Reviews )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
