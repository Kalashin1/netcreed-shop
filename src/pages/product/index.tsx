import React from 'react';
import Layout from './Layout';
import {
  ProductGallery,
  ProductDetail,
  ProductInformation,
  SimilarProduct,
} from './components/components';

const Product = () => {
  return (
    <Layout>
      <div className="page-content">
        <div className="container">
          <div className="product-details-top mb-2">
            <div className="row">
              <ProductGallery />
              <ProductDetail />
            </div>
            <ProductInformation />
            <SimilarProduct />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
