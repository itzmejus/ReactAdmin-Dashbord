import React from "react";
import DeliveryBoyImg from "../images/deliveryBoy.png";
import DeliveredImg from "../images/deliveredImg.png";
import DistanceCovered from "../images/DistanceImg.png";
import TotalDeliveryBoy from "../images/TotalDeliveryBoy.png";
import DeliveryRating from "../images/DeliveryRating.png";
import TableData from "../components/TableData";
import cycleRunning from '../images/cycleRunning.gif'
function Delivery() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-lg-12 col-md-12 col-sm-4  small-card2-bg-color  ">
          <img src={cycleRunning} style={{ height: "150px" }} />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mt-1 ">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-1  ">
              <div className="card small-card1-bg-color ">
                <div className="card-body  ">
                  <h1 className="fs-5 text-center ">Total Items Delivered</h1>
                  <hr />
                  <img
                    class="rounded float-start"
                    src={DeliveredImg}
                    style={{ height: "100px" }}
                  />
                  <h1 className="text-center">6765</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-1">
              <div className="card small-card2-bg-color">
                <div className="card-body">
                  <h1 className="fs-5 text-center ">Total KM's Covered</h1>
                  <hr />
                  <img
                    class="rounded float-start"
                    src={DistanceCovered}
                    style={{ height: "100px" }}
                  />
                  <h1 className="text-center">9985Km</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3  col-md-3 col-sm-6 pt-1">
              <div className="card small-card3-bg-color">
                <div className="card-body">
                  <h1 className="fs-5 text-center ">Total Delivery Boys</h1>
                  <hr />
                  <img
                    class="rounded float-start"
                    src={TotalDeliveryBoy}
                    style={{ height: "100px" }}
                  />
                  <h1 className="text-center ">65</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 pt-1">
              <div className="card small-card1-bg-color">
                <div className="card-body">
                  <h1 className="fs-5 text-center ">Total Stars Recieved</h1>
                  <hr />
                  <img
                    class="rounded float-start"
                    src={DeliveryRating}
                    style={{ height: "100px" }}
                  />
                  <h1 className="text-center">6765</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-1">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card  small-card1-bg-color ">
                <div className="card-body ">
                  <h1 className="card-text text-center fs-5">
                    Add Delivery Boy
                  </h1>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-1">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Location name"
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-1">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Phone "
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-1">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Place name"
                      />
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-1">
                      <input type="file" class="form-control" />
                    </div>
                  </div>
                </div>
                <button className="btn small-card3-bg-color p-1 m-1">
                  Add New
                </button>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="card  small-card2-bg-color ">
                <div className="card-body">
                  <h1 className="card-text fs-5">Delivery Boys</h1>
                  <TableData/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
