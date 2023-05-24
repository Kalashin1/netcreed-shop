import React from 'react';
import {
  HeaderMiddle,
  HeaderTop,
  BreadCrumb,
  PageHeader,
} from './components/components';
import Footer from '../product/components/Footer';
import {
  MobileMenu,
  NewsLetter,
  SignInModal,
} from '../components/components';

interface LayoutProps {
  children: React.ReactNode;
  pageHeaderTitle?: string;
  pageHeaderSub?: string;
  breadCrumbFirstLevel?: string;
  breadCrumbSecondLevel: string;
  breadCrumbThirdLevel?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageHeaderTitle,
  pageHeaderSub,
  breadCrumbFirstLevel,
  breadCrumbSecondLevel,
  breadCrumbThirdLevel,
}) => {
  return (
    <>
      <div className="page-wrapper">
        <header className="header">
          <HeaderTop />
          <HeaderMiddle />
        </header>
        <main className="main">
          <PageHeader title={pageHeaderTitle} subTitle={pageHeaderSub} />
          <BreadCrumb firstLevel={breadCrumbFirstLevel} secondLevel={breadCrumbSecondLevel} thirdLevel={breadCrumbThirdLevel} />
          <div className="page-content">{children}</div>
        </main>
        <Footer></Footer>
      </div>
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
      <div className="mobile-menu-overlay"></div>
      <MobileMenu></MobileMenu>
      <SignInModal></SignInModal>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Layout;
