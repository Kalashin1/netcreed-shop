import React from 'react';
import Layout from '../shop/Layout';
import DashboardComponent from './components/Dashboard';

const Dashboard = () => {
  return (
    <Layout
      pageHeaderSub='Dashboard'
      pageHeaderTitle='Welcome'
      breadCrumbFirstLevel='Creed'
      breadCrumbSecondLevel='Dashboard'
    >
      <DashboardComponent></DashboardComponent>
    </Layout>
  );
};

export default Dashboard;
