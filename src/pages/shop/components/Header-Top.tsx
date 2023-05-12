import React from 'react';

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-left">
          <div className="header-dropdown">
            <a href="!#">Usd</a>
            <div className="header-menu">
              <ul>
                <li>
                  <a href="!#">Eur</a>
                </li>
                <li>
                  <a href="!#">Usd</a>
                </li>
              </ul>
            </div>
            {/* <!-- End .header-menu --> */}
          </div>
          {/* <!-- End .header-dropdown --> */}

          <div className="header-dropdown">
            <a href="!#">Eng</a>
            <div className="header-menu">
              <ul>
                <li>
                  <a href="!#">English</a>
                </li>
                <li>
                  <a href="!#">French</a>
                </li>
                <li>
                  <a href="!#">Spanish</a>
                </li>
              </ul>
            </div>
            {/* <!-- End .header-menu --> */}
          </div>
          {/* <!-- End .header-dropdown --> */}
        </div>
        {/* <!-- End .header-left --> */}

        <div className="header-right">
          <ul className="top-menu">
            <li>
              <a href="!#">Links</a>
              <ul>
                <li>
                  <a href="tel:#">
                    <i className="icon-phone"></i>Call: +0123 456 789
                  </a>
                </li>
                <li>
                  <a href="wishlist.html">
                    <i className="icon-heart-o"></i>Wishlist <span>(3)</span>
                  </a>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
                <li>
                  <a href="#signin-modal" data-toggle="modal">
                    <i className="icon-user"></i>Login
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <!-- End .top-menu --> */}
        </div>
        {/* <!-- End .header-right --> */}
      </div>
      {/* <!-- End .container --> */}
    </div>
  );
};

export default HeaderTop;
