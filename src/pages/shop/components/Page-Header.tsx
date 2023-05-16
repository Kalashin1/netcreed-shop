import React from 'react';

interface PageHeaderProps {
  title?: string;
  subTitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title = 'Grid 4 Columns',
  subTitle = 'Shop'
}) => {
  return (
    <div
      className="page-header text-center"
      style={{ backgroundImage: 'url(assets/images/page-header-bg.jpg)' }}
    >
      <div className="container">
        <h1 className="page-title">
          {title}<span>{subTitle}</span>
        </h1>
      </div>
      {/* <!-- End .container --> */}
    </div>
  );
};

export default PageHeader;
