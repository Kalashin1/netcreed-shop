import React from 'react';

interface CartSummaryProps {
  subTotal: number;
  shippingType?: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subTotal,
}) => {
  const [total, setTotal] = React.useState(subTotal + 20);
  return (
    <aside className="col-lg-3">
      <div className="summary summary-cart">
        <h3 className="summary-title">Cart Total</h3>
        {/* <!-- End .summary-title --> */}

        <table className="table table-summary">
          <tbody>
            <tr className="summary-subtotal">
              <td>Subtotal:</td>
              <td>${subTotal}</td>
            </tr>
            {/* <!-- End .summary-subtotal --> */}
            <tr className="summary-shipping">
              <td>Shipping:</td>
              <td>&nbsp;</td>
            </tr>

            {/* <tr className="summary-shipping-row">
              <td>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="free-shipping"
                    name="shipping"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="free-shipping"
                  >
                    Free Shipping
                  </label>
                </div>
              </td>
              <td>$0.00</td>
            </tr> */}
            {/* <!-- End .summary-shipping-row --> */}

            {/* <tr className="summary-shipping-row">
              <td>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="standart-shipping"
                    name="shipping"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="standart-shipping"
                  >
                    Standart:
                  </label>
                </div>
                
              </td>
              <td>$10.00</td>
            </tr> */}
            {/* <!-- End .summary-shipping-row --> */}

            <tr className="summary-shipping-row">
              <td>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="express-shipping"
                    name="shipping"
                    checked
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="express-shipping"
                  >
                    Express:
                  </label>
                </div>
                {/* <!-- End .custom-control --> */}
              </td>
              <td>$20.00</td>
            </tr>
            {/* <!-- End .summary-shipping-row --> */}

            {/* <tr className="summary-shipping-estimate">
              <td>
                Estimate for Your Country
                <br /> <a href="dashboard.html">Change address</a>
              </td>
              <td>&nbsp;</td>
            </tr> */}
            {/* <!-- End .summary-shipping-estimate --> */}

            <tr className="summary-total">
              <td>Total:</td>
              <td>${total}</td>
            </tr>
            {/* <!-- End .summary-total --> */}
          </tbody>
        </table>
        {/* <!-- End .table table-summary --> */}

        <a
          href="checkout.html"
          className="btn btn-outline-primary-2 btn-order btn-block"
        >
          PROCEED TO CHECKOUT
        </a>
      </div>
      {/* <!-- End .summary --> */}

      <a href="category.html" className="btn btn-outline-dark-2 btn-block mb-3">
        <span>CONTINUE SHOPPING</span>
        <i className="icon-refresh"></i>
      </a>
    </aside>
  );
};

export default CartSummary;
