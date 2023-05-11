import React from 'react';
import Layout from './Layout';
import {
  IntroSlider,
  ExploreCategories,
  SmartOffers,
  NewArrivals,
  CallToAction,
  DealsAndOutline,
  BrandSlider,
  TrendingProducts,
  Recommendations,
} from './components/components';

const Home = () => {
  return (
    <Layout>
      <IntroSlider></IntroSlider>
      <ExploreCategories></ExploreCategories>
      <div className="mb-4">
        <SmartOffers></SmartOffers>
      </div>
      <div className="mb-4">
        <NewArrivals></NewArrivals>
      </div>
      <div className="mb-6">
        <CallToAction></CallToAction>
        <DealsAndOutline></DealsAndOutline>
        <BrandSlider></BrandSlider>
        <TrendingProducts></TrendingProducts>
      </div>
      <div className="mb-5"></div>
      <Recommendations></Recommendations>
    </Layout>
  );
};

export default Home;
