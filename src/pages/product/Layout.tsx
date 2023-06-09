import React from 'react';
import { HeaderMiddle, HeaderTop } from '../shop/components/components';
import { PageHeader } from '../shop/components/components';
import { BreadCrumb, Footer } from './components/components';
import {MobileMenu, SignInModal, NewsLetter} from '../components/components';

interface LayoutProps {
  children: React.ReactNode;
  showPageHeader?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showPageHeader = false }) => {
  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <HeaderTop />
          <HeaderMiddle />
        </header>
        <main className="main">
          {showPageHeader && (<PageHeader />)}
          <BreadCrumb />
          {children}
          <Footer></Footer>
        </main>
      </div>
      <div className="mobile-menu-overlay"></div>
      <MobileMenu></MobileMenu>
      <SignInModal></SignInModal>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Layout;
