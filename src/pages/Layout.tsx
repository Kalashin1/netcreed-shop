import React from 'react';
import {
  HeaderTop,
  HeaderMiddle,
  HeaderBottom,
  MobileMenu,
  NewsLetter,
  SignInModal,
  Footer,
} from './components/components';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="page-wrapper">
      <header className="header header-intro-clearance header-4">
        <HeaderTop></HeaderTop>
        <HeaderMiddle></HeaderMiddle>
        <HeaderBottom></HeaderBottom>
      </header>
      <main className="main">{children}</main>
      <Footer></Footer>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      <div className="mobile-menu-overlay"></div>
      <MobileMenu></MobileMenu>
      <SignInModal></SignInModal>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Layout;
