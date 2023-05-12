import React from 'react';
import Layout from './Layout';
import {
  ToolBox,
  Products,
  Pagination,
  FilterTitle,
  CategoryFilter,
  SizeFilter,
  ColorFilter,
  PriceFilter,
  BrandFilter,
} from './components/components';

const Shop = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row px-4">
          <div className="col-lg-9">
            <ToolBox />
            <Products />
            <Pagination />
          </div>
          <aside className="col-lg-3 order-lg-first">
            <div className="sidebar sidebar-shop" style={{ padding: '0 64px' }}>
              <FilterTitle />
              <CategoryFilter />
              <SizeFilter />
              <ColorFilter />
              <PriceFilter />
              <BrandFilter />
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
