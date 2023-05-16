import React from 'react';
import Sidebar from './Sidebar';
import Home from './Home';

const DashboardComponent = () => {
  return (
    <div className="page-content" style={{ padding: '10px 4vw' }}>
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <Sidebar />
            {/* <!-- End .col-lg-3 --> */}

            <div className="col-md-8 col-lg-9">
              <div className="tab-content">
                <Home />
                {/* <!-- .End .tab-pane --> */}

                <div
                  className="tab-pane fade"
                  id="tab-orders"
                  role="tabpanel"
                  aria-labelledby="tab-orders-link"
                >
                  <p>No order has been made yet.</p>
                  <a href="category.html" className="btn btn-outline-primary-2">
                    <span>GO SHOP</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- .End .tab-pane --> */}

                <div
                  className="tab-pane fade"
                  id="tab-downloads"
                  role="tabpanel"
                  aria-labelledby="tab-downloads-link"
                >
                  <p>No downloads available yet.</p>
                  <a href="category.html" className="btn btn-outline-primary-2">
                    <span>GO SHOP</span>
                    <i className="icon-long-arrow-right"></i>
                  </a>
                </div>
                {/* <!-- .End .tab-pane --> */}

                <div
                  className="tab-pane fade"
                  id="tab-address"
                  role="tabpanel"
                  aria-labelledby="tab-address-link"
                >
                  <p>
                    The following addresses will be used on the checkout page by
                    default.
                  </p>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="card card-dashboard">
                        <div className="card-body">
                          <h3 className="card-title">Billing Address</h3>
                          {/* <!-- End .card-title --> */}

                          <p>
                            User Name
                            <br />
                            User Company
                            <br />
                            John str
                            <br />
                            New York, NY 10001
                            <br />
                            1-234-987-6543
                            <br />
                            yourmail@mail.com
                            <br />
                            <a href="#">
                              Edit <i className="icon-edit"></i>
                            </a>
                          </p>
                        </div>
                        {/* <!-- End .card-body --> */}
                      </div>
                      {/* <!-- End .card-dashboard --> */}
                    </div>
                    {/* <!-- End .col-lg-6 --> */}

                    <div className="col-lg-6">
                      <div className="card card-dashboard">
                        <div className="card-body">
                          <h3 className="card-title">Shipping Address</h3>
                          {/* <!-- End .card-title --> */}

                          <p>
                            You have not set up this type of address yet.
                            <br />
                            <a href="#">
                              Edit <i className="icon-edit"></i>
                            </a>
                          </p>
                        </div>
                        {/* <!-- End .card-body --> */}
                      </div>
                      {/* <!-- End .card-dashboard --> */}
                    </div>
                    {/* <!-- End .col-lg-6 --> */}
                  </div>
                  {/* <!-- End .row --> */}
                </div>
                {/* <!-- .End .tab-pane --> */}

                <div
                  className="tab-pane fade"
                  id="tab-account"
                  role="tabpanel"
                  aria-labelledby="tab-account-link"
                >
                  <form action="#">
                    <div className="row">
                      <div className="col-sm-6">
                        <label>First Name *</label>
                        <input type="text" className="form-control" required />
                      </div>
                      {/* <!-- End .col-sm-6 --> */}

                      <div className="col-sm-6">
                        <label>Last Name *</label>
                        <input type="text" className="form-control" required />
                      </div>
                      {/* <!-- End .col-sm-6 --> */}
                    </div>
                    {/* <!-- End .row --> */}

                    <label>Display Name *</label>
                    <input type="text" className="form-control" required />
                    <small className="form-text">
                      This will be how your name will be displayed in the account
                      section and in reviews
                    </small>

                    <label>Email address *</label>
                    <input type="email" className="form-control" required />

                    <label>
                      Current password (leave blank to leave unchanged)
                    </label>
                    <input type="password" className="form-control" />

                    <label>New password (leave blank to leave unchanged)</label>
                    <input type="password" className="form-control" />

                    <label>Confirm new password</label>
                    <input type="password" className="form-control mb-2" />

                    <button type="submit" className="btn btn-outline-primary-2">
                      <span>SAVE CHANGES</span>
                      <i className="icon-long-arrow-right"></i>
                    </button>
                  </form>
                </div>
                {/* <!-- .End .tab-pane --> */}
              </div>
            </div>
            {/* <!-- End .col-lg-9 --> */}
          </div>
          {/* <!-- End .row --> */}
        </div>
        {/* <!-- End .container --> */}
      </div>
    </div>
  );
};

export default DashboardComponent;
