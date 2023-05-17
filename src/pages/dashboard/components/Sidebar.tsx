import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const goto = useNavigate();
  return (
    <aside className="col-md-4 col-lg-3">
      <ul
        className="nav nav-dashboard flex-column mb-3 mb-md-0"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="tab-dashboard-link"
            data-toggle="tab"
            href="#tab-dashboard"
            role="tab"
            aria-controls="tab-dashboard"
            aria-selected="true"
          >
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-orders-link"
            data-toggle="tab"
            href="#tab-orders"
            role="tab"
            aria-controls="tab-orders"
            aria-selected="false"
          >
            Orders
          </a>
        </li>
        <li className="nav-item">
          <span
            className="nav-link"
            id="tab-downloads-link"
            data-toggle="tab"
            role="tab"
            onClick={e => goto('/shop')}
            style={{ cursor: 'pointer'}}
            aria-controls="tab-downloads"
            aria-selected="false"
          >
            Shop
          </span>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-address-link"
            data-toggle="tab"
            href="#tab-address"
            role="tab"
            aria-controls="tab-address"
            aria-selected="false"
          >
            Adresses
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="tab-account-link"
            data-toggle="tab"
            href="#tab-account"
            role="tab"
            aria-controls="tab-account"
            aria-selected="false"
          >
            Account Details
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Sign Out
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;