import React, { useState } from "react";
import "../styles/Billings.css";
import debitcard from "../images/debitcard.png";
import TableData from "../components/TableData";
import mango from "../images/mango.jpg";
import OrderHeagImg from "../images/OrderHeagImg.jpg";

function Billings() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="card  mt-1 ">
            <h1 className="card-text text-center fs-4 fw-bold ">
              Billings Dashboard
              <img src={OrderHeagImg} style={{ height: "150px" }} />
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-1">
          <div className="card ">
            <div className="card-body">
              <h1 className="card-text text-center">Payments</h1>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 pb-1">
                  <div className="card small-card1-bg-color border-0">
                    <div className="card-body  text-center ">
                      <h4 className="card-text fs-6 ">
                        <h2>7</h2>
                        Expected Payments
                      </h4>
                      <p className="payments-text-bg-color rounded-3 ">
                        Total: $676478
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 pb-1">
                  <div className="card small-card2-bg-color border-0">
                    <div className="card-body  text-center">
                      <h4 className="card-text fs-6 ">
                        <h2 className="text-danger ">3</h2>
                        Pending Repayments
                      </h4>
                      <p className=" payments-text-bg-color rounded-3">
                        Total: $75478
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 pb-1">
                  <div className="card small-card3-bg-color border-0">
                    <div className="card-body  text-center">
                      <h4 className="card-text fs-6 ">
                        <h2 className="text-primary">7</h2>
                        Completed Payments
                      </h4>
                      <p className="payments-text-bg-color  rounded-3">
                        Total: $45478
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="card mt-1 mb-1 global-bg-color">
              <div className="card-body">
                <div className="card-title">
                  <h1 className="card-text text-center">Recent Payments</h1>
                  <table class="table ">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <div className="row pt-1">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="card small-card1-bg-color border-0">
                <div className="card-body align-self-center ">
                  <h1 className="card-text text-center fs-5"> Balance:</h1>
                  <h1 className="card-text text-center fw-bold">$7900796</h1>
                  <img src={debitcard} class="debit-image  " alt="..." />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card small-card2-bg-color border-0">
                <div className="card-body ">
                  <div className="card-text">
                    <h1 className="card-text">Select options</h1>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Include TAX
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Include Due amount
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Remove from Shop list
                    </label>
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckDefault"
                    >
                      Make Favourite
                    </label>
                  </div>
                  <div className="row  pt-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card border-0 mb-1">
                        <button className="btn small-card1-bg-color border-0 me">
                          Send Reminder
                        </button>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="card border-0">
                        <button className="btn small-card3-bg-color border-0">
                          Send Invoices
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="card-body small-card3-bg-color">
                <div className="card-text">
                  <h1>Recent money</h1>
                  <TableData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card small-card3-bg-color mb-2">
            <div className="card-body ">
              <div className="card-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billings;
