import React from 'react';
import { HeaderMiddle, HeaderTop } from '../shop/components/components';
import { BreadCrumb, Footer } from './components/components';

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
        {/* <PageHeader /> */}
        <BreadCrumb />
        {children}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
