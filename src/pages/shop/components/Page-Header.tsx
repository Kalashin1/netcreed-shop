import React from 'react';

const PageHeader = () => {
  return (
    <div
      className="page-header text-center"
      style={{ backgroundImage: 'url(assets/images/page-header-bg.jpg)' }}
    >
      <div className="container">
        <h1 className="page-title">
          Grid 4 Columns<span>Shop</span>
        </h1>
      </div>
      {/* <!-- End .container --> */}
    </div>
  );
};

export default PageHeader;
