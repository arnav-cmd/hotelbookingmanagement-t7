import React, { useEffect, useState } from "react";
import "./paymentgate.css";
import { Link } from "react-router-dom";


const PaymentForm = () => {
  const [nameOnCard, setNameOnCard] = useState("");

  useEffect(() => {
    const popoverTriggers = document.querySelectorAll(
      '[data-toggle="popover"]'
    );

    popoverTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const cvcPreviewContainer = document.querySelector(
          ".cvc-preview-container"
        );

        cvcPreviewContainer.classList.toggle("hide");
      });
    });
  }, []);

  const handleNameChange = (event) => {
    const inputText = event.target.value;
    const alphabeticText = inputText.replace(/[^A-Za-z]/g, "");
    const uppercaseText = alphabeticText.toUpperCase();
    setNameOnCard(uppercaseText);
  };
  const handleCardNumberChange = (event) => {
    const input = event.target;
    const value = input.value.replace(/\s/g, ""); // Remove existing spaces
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 "); // Add spaces every 4 digits
    input.value = formattedValue;
  };

  const [formattedValue, setFormattedValue] = useState("");

  const formatExpiryDate = (inputValue) => {
    const numericValue = inputValue.replace(/\D/g, ""); // Remove non-numeric characters

    if (numericValue.length > 2) {
      setFormattedValue(
        `${numericValue.slice(0, 2)} / ${numericValue.slice(2)}`
      );
    } else {
      setFormattedValue(numericValue);
    }
  };

  const onlyNumeric = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="container1">
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
              <input
                id="NameOnCard"
                className="form-control"
                type="text"
                maxLength="25"
                value={nameOnCard}
                onChange={handleNameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="CreditCardNumber">Card number</label>

              <input
                id="CreditCardNumber"
                className="null card-image form-control"
                type="text"
                maxLength="19"
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="expiry-date-group form-group">
              <label htmlFor="ExpiryDate">Expiry date</label>

              <input
                id="ExpiryDate"
                className="form-control"
                type="text"
                placeholder="MM / YY"
                value={formattedValue}
                maxLength="7"
                onChange={(e) => formatExpiryDate(e.target.value)}
                onKeyDown={onlyNumeric}
              />
            </div>

            <div className="security-code-group form-group">
              <label htmlFor="SecurityCode">Security code</label>

              <div className="input-container">

                <input
                  type="number"
                  id="SecurityCode"
                  className="form-control"
                  maxLength="3"
                  minLength="3"
                />

                <i id="cvc" className="fa fa-question-circle"></i>
              </div>

              <div className="cvc-preview-container two-card hide">
                <div className="amex-cvc-preview"></div>

                <div className="visa-mc-dis-cvc-preview"></div>
              </div>
            </div>
            <button
              id="PayButton"
              className="btn btn-block btn-primary submit-button"
              type="submit"
            >
              <Link to="/bookingconfirmation">
                <span className="submit-button-lock"></span>
                <span className="align-middle">Pay</span>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
