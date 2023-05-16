import React from 'react';

const LeftBanner = () => {
  return (
    <div className="col-sm-6 col-md-3">
      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-6.jpg" alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">Sportwear</h3>
          <h4 className="banner-subtitle">0 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>
    </div>
  );
};

const CenterBanner = () => {
  return (
    <div className="col-sm-6 col-md-3 order-md-last">
      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-8.jpg" alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">Jumpers</h3>
          <h4 className="banner-subtitle">1 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>
    </div>
  );
};

const RightBanner = () => {
  return (
    <div className="col-md-6">
      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-7.jpg" alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">Shoes</h3>
          <h4 className="banner-subtitle">2 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>
    </div>
  );
};

const BottomBanner = () => {
  return (
    <>
      <LeftBanner />
      <CenterBanner />
      <RightBanner />
    </>
  );
};

export default BottomBanner;