import React from 'react';
import { Container } from 'react-bootstrap';
import SigninForm from './Signin-Form';
import SignupForm from './Signup-Form';

const TabHeading = () => {
  return (
    <ul className="nav nav-pills nav-fill" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link"
          id="signin-tab-2"
          data-toggle="tab"
          href="#signin-2"
          role="tab"
          aria-controls="signin-2"
          aria-selected="false"
        >
          Sign In
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link active"
          id="register-tab-2"
          data-toggle="tab"
          href="#register-2"
          role="tab"
          aria-controls="register-2"
          aria-selected="true"
        >
          Register
        </a>
      </li>
    </ul>
  );
};

const AuthTab = () => {
  return (
    <div
      className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
      style={{
        backgroundImage: 'url(\'assets/images/backgrounds/login-bg.jpg\')',
      }}
    >
      <Container>
        <div className="form-box">
          <div className="form-tab">
            <TabHeading />
            <div className="tab-content">
              <SigninForm />
              <SignupForm />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AuthTab;
