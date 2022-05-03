import React from "react";
import Account from "./Account";
import Transaction from "./Transaction";
import Services from "./Services";

const Tabpanel = () => (
    <>
      <div
        style={{ marginTop: "2px", marginLeft: "10px", marginRight: "10px" }}
      >
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link"
              id="account-tab"
              data-toggle="tab"
              href="#account"
              role="tab"
              aria-controls="account"
              aria-selected="true"
            >
              <h5>
                <span style={{ marginLeft: "15px" }}>Account</span>
              </h5>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="transaction-tab"
              data-toggle="tab"
              href="#transaction"
              role="tab"
              aria-controls="transaction"
              aria-selected="false"
            >
              <h5>
                <span style={{ marginLeft: "15px" }}>Transaction</span>
              </h5>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="services-tab"
              data-toggle="tab"
              href="#services"
              role="tab"
              aria-controls="services"
              aria-selected="false"
            >
              <h5>
                <span style={{ marginLeft: "15px" }}>Services</span>
              </h5>
            </a>
          </li>
        </ul>

        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="account"
            role="tabpanel"
            aria-labelledby="account-tab"
          >
            <Account />
          </div>
          <div
            className="tab-pane fade"
            id="transaction"
            role="tabpanel"
            aria-labelledby="transaction-tab"
          >
            <Transaction />
          </div>
          <div
            className="tab-pane fade"
            id="services"
            role="tabpanel"
            aria-labelledby="services-tab"
          >
            <Services />
          </div>
        </div>
      </div>
    </>
  );

export default Tabpanel;
