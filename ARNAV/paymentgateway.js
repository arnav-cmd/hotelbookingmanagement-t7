import React, { useEffect } from 'react';

const PaymentForm = () => {
  useEffect(() => {
    const popoverTriggers = document.querySelectorAll('[data-toggle="popover"]');
    popoverTriggers.forEach((trigger) => {
      trigger.addEventListener('click', () => {
        const cvcPreviewContainer = document.querySelector('.cvc-preview-container');
        cvcPreviewContainer.classList.toggle('hide');
      });
    });
  }, []);

  return (
    <div className="container">
      <div id="Checkout" className="inline">
        <h1>Pay Invoice</h1>
        <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="PaymentAmount">Payment amount</label>
            <div className="amount-placeholder">
              <span>₹</span>
              <span>5000.00</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="NameOnCard">Name on card</label>
            <input id="NameOnCard" className="form-control" type="text" maxLength="255" />
          </div>
          <div className="form-group">
            <label htmlFor="CreditCardNumber">Card number</label>
            <input id="CreditCardNumber" className="null card-image form-control" type="text" />
          </div>
          <div className="expiry-date-group form-group">
            <label htmlFor="ExpiryDate">Expiry date</label>
            <input id="ExpiryDate" className="form-control" type="text" placeholder="MM / YY" maxLength="7" />
          </div>
          <div className="security-code-group form-group">
            <label htmlFor="SecurityCode">Security code</label>
            <div className="input-container">
              <input id="SecurityCode" className="form-control" type="text" />
              <i id="cvc" className="fa fa-question-circle"></i>
            </div>
            <div className="cvc-preview-container two-card hide">
              <div className="amex-cvc-preview"></div>
              <div className="visa-mc-dis-cvc-preview"></div>
            </div>
          </div>
          <div className="zip-code-group form-group">
            <label htmlFor="ZIPCode">ZIP/Postal code</label>
            <div className="input-container">
              <input id="ZIPCode" className="form-control" type="text" maxLength="10" />
              <a tabIndex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="left" data-content="Enter the ZIP/Postal code for your credit card billing address.">
                <i className="fa fa-question-circle"></i>
              </a>
            </div>
          </div>
          <button id="PayButton" className="btn btn-block btn-success submit-button" type="submit">
            <span className="submit-button-lock"></span>
            <span className="align-middle">Pay $500.00</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;