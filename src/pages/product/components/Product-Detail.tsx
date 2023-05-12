import React from 'react';

const ProductDetail = () => {
  return (
    <div className="col-md-6">
      <div className="product-details product-details-centered">
        <h1 className="product-title">Beige metal hoop tote bag</h1>
        {/* <!-- End .product-title --> */}

        <div className="ratings-container">
          <div className="ratings">
            <div className="ratings-val" style={{ width: '80%' }}></div>
            {/* <!-- End .ratings-val --> */}
          </div>
          {/* <!-- End .ratings --> */}
          <a
            className="ratings-text"
            href="#product-review-link"
            id="review-link"
          >
            ( 2 Reviews )
          </a>
        </div>
        {/* <!-- End .rating-container --> */}

        <div className="product-price">$76.00</div>
        {/* <!-- End .product-price --> */}

        <div className="product-content">
          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero.
          </p>
        </div>
        {/* <!-- End .product-content --> */}

        <div className="details-filter-row details-row-size">
          <label>Color:</label>

          <div className="product-nav product-nav-dots">
            <a href="#" className="active" style={{ background: '#cc9966' }}>
              <span className="sr-only">Color name</span>
            </a>
            <a href="#" style={{ background: '#333333' }}>
              <span className="sr-only">Color name</span>
            </a>
          </div>
          {/* <!-- End .product-nav --> */}
        </div>
        {/* <!-- End .details-filter-row --> */}

        <div className="details-filter-row details-row-size">
          <label htmlFor="size">Size:</label>
          <div className="select-custom">
            <select name="size" id="size" className="form-control">
              <option value="#" selected>
                One Size
              </option>
              <option value="s">Small</option>
              <option value="m">Medium</option>
              <option value="l">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </div>
          {/* <!-- End .select-custom --> */}

          <a href="#" className="size-guide">
            <i className="icon-th-list"></i>size guide
          </a>
        </div>
        {/* <!-- End .details-filter-row --> */}

        <div className="product-details-action">
          <div className="details-action-col">
            <div className="product-details-quantity">
              <input
                type="number"
                id="qty"
                className="form-control"
                value="1"
                min="1"
                max="10"
                step="1"
                data-decimals="0"
                required
              />
            </div>
            {/* <!-- End .product-details-quantity --> */}

            <a href="#" className="btn-product btn-cart">
              <span>add to cart</span>
            </a>
          </div>
          {/* <!-- End .details-action-col --> */}

          <div className="details-action-wrapper">
            <a href="#" className="btn-product btn-wishlist" title="Wishlist">
              <span>Add to Wishlist</span>
            </a>
            <a href="#" className="btn-product btn-compare" title="Compare">
              <span>Add to Compare</span>
            </a>
          </div>
          {/* <!-- End .details-action-wrapper --> */}
        </div>
        {/* <!-- End .product-details-action --> */}

        <div className="product-details-footer">
          <div className="product-cat">
            <span>Category:</span>
            <a href="#">Women</a>,<a href="#">Dresses</a>,<a href="#">Yellow</a>
          </div>
          {/* <!-- End .product-cat --> */}

          <div className="social-icons social-icons-sm">
            <span className="social-label">Share:</span>
            <a
              href="#"
              className="social-icon"
              title="Facebook"
              target="_blank"
            >
              <i className="icon-facebook-f"></i>
            </a>
            <a href="#" className="social-icon" title="Twitter" target="_blank">
              <i className="icon-twitter"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              title="Instagram"
              target="_blank"
            >
              <i className="icon-instagram"></i>
            </a>
            <a
              href="#"
              className="social-icon"
              title="Pinterest"
              target="_blank"
            >
              <i className="icon-pinterest"></i>
            </a>
          </div>
        </div>
        {/* <!-- End .product-details-footer --> */}
      </div>
      {/* <!-- End .product-details --> */}
    </div>
  );
};

export default ProductDetail;
