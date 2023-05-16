import React from 'react';
import Layout from '../Layout';
import Banner from './components/Banner';
import BottomBanner from './components/BottomBanner';
import RightBanner from './components/RightBanner';

const Category: React.FC = () => {
  return (
    <Layout showPageHeader={true}>
      <div className="page-content">
        <div className="categories-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <Banner />
              </div>
              <div className="col-md-6">
                <RightBanner />
              </div>
              <BottomBanner />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;