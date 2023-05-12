import React from 'react';
import {
  HeaderMiddle,
  HeaderTop,
  BreadCrumb,
  PageHeader,
} from './components/components';
import Footer from '../product/components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <header className="header">
        <HeaderTop />
        <HeaderMiddle />
      </header>
      <main className="main">
        <PageHeader />
        <BreadCrumb />
        <div className="page-content">{children}</div>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
