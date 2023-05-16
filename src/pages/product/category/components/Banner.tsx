import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-1.jpg" alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">Dresses</h3>
          <h4 className="banner-subtitle">3 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>

      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-2.jpg" alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">Jackets</h3>
          <h4 className="banner-subtitle">2 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;