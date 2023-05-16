import React from 'react';
import { AuthContext } from '../../../App';


const Home: React.FC = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <div
      className="tab-pane fade show active"
      id="tab-dashboard"
      role="tabpanel"
      aria-labelledby="tab-dashboard-link"
    >
      <p>
        Hello{' '}
        <span className="font-weight-normal text-dark">{ user ? user?.displayName?.slice(0, user.displayName?.indexOf(' ')): ''}</span>{' '}
        (not{' '}
        <span className="font-weight-normal text-dark">{ user ? user?.displayName?.slice(0, user.displayName?.indexOf(' ')): ''}</span>?{' '}
        <a href="#">Log out</a>)
        <br />
        From your account dashboard you can view your{' '}
        <a
          href="#tab-orders"
          className="tab-trigger-link link-underline"
        >
          recent orders
        </a>
        , manage your{' '}
        <a href="#tab-address" className="tab-trigger-link">
          shipping and billing addresses
        </a>
        , and{' '}
        <a href="#tab-account" className="tab-trigger-link">
          edit your password and account details
        </a>
        .
      </p>
    </div>
  );
};

export default Home;