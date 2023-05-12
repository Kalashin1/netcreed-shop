import React from 'react';

const ProductGallery = () => {
  return (
    <div className="col-md-6">
      <div className="product-gallery product-gallery-vertical">
        <div className="row">
          <figure className="product-main-image">
            <img
              id="product-zoom"
              src="assets/images/products/single/centered/1.jpg"
              data-zoom-image="assets/images/products/single/centered/1-big.jpg"
              alt="product image"
            />

            <a
              href="#"
              id="btn-product-gallery"
              className="btn-product-gallery"
            >
              <i className="icon-arrows"></i>
            </a>
          </figure>
          {/* <!-- End .product-main-image --> */}

          <div id="product-zoom-gallery" className="product-image-gallery">
            <a
              className="product-gallery-item active"
              href="#"
              data-image="assets/images/products/single/centered/1.jpg"
              data-zoom-image="assets/images/products/single/centered/1-big.jpg"
            >
              <img
                src="assets/images/products/single/centered/1-small.jpg"
                alt="product side"
              />
            </a>

            <a
              className="product-gallery-item"
              href="#"
              data-image="assets/images/products/single/centered/2.jpg"
              data-zoom-image="assets/images/products/single/centered/2-big.jpg"
            >
              <img
                src="assets/images/products/single/centered/2-small.jpg"
                alt="product cross"
              />
            </a>

            <a
              className="product-gallery-item"
              href="#"
              data-image="assets/images/products/single/centered/3.jpg"
              data-zoom-image="assets/images/products/single/centered/3-big.jpg"
            >
              <img
                src="assets/images/products/single/centered/3-small.jpg"
                alt="product with model"
              />
            </a>

            <a
              className="product-gallery-item"
              href="#"
              data-image="assets/images/products/single/centered/4.jpg"
              data-zoom-image="assets/images/products/single/centered/4-big.jpg"
            >
              <img
                src="assets/images/products/single/centered/4-small.jpg"
                alt="product back"
              />
            </a>
          </div>
          {/* <!-- End .product-image-gallery --> */}
        </div>
        {/* <!-- End .row --> */}
      </div>
      {/* <!-- End .product-gallery --> */}
    </div>
  );
};

export default ProductGallery;
