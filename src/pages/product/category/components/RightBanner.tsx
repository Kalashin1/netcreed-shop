import React from 'react';

interface RightBannerProps {
  children?: React.ReactNode;
}

// TODO: Extract to own component file
const BannerItem = () => {
  return (
    <div className="col-6">
      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-3.jpg" alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">T-shirts</h3>
          <h4 className="banner-subtitle">0 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>
    </div>
  );
};

const BannerItemTwo = () => {
  return (
    <div className="col-6">
      <div className="banner banner-cat banner-badge">
        <a href="#">
          <img src="assets/images/category/boxed/banner-4.jpg" style={{ width: '100%', height: 'auto' }} alt="Banner" />
        </a>

        <a className="banner-link" href="#">
          <h3 className="banner-title">Jeans</h3>
          <h4 className="banner-subtitle">1 Products</h4>
          <span className="banner-link-text">Shop Now</span>
        </a>
      </div>
    </div>
  );
};

const BottomBanner = () => {
  return (
    <div className="banner banner-cat banner-badge">
      <a href="#">
        <img src="assets/images/category/boxed/banner-5.jpg" alt="Banner" />
      </a>

      <a className="banner-link" href="#">
        <h3 className="banner-title">Bags</h3>
        <h4 className="banner-subtitle">4 Products</h4>
        <span className="banner-link-text">Shop Now</span>
      </a>
    </div>
  );
};

const RightBanner: React.FC<RightBannerProps> = () => {
  return (
    <div className="row">
      <BannerItem />
      <BannerItemTwo />
      <BottomBanner />
    </div>
  );
};

export default RightBanner;