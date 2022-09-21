import React, { useState } from "react";
import ordersImg from "../images/ordersImg.png";
import Orders2Img from "../images/Orders2Img.png";
import BiriyaniThump from "../images/BiriyaniThump.png";
import alfamThump from "../images/alfamThump.png";
import mandiThump from "../images/mandiThump.png";
import LineChart from "../Charts/LineChart";
import { UserData } from "../Data/UsersLoginData";
import TableData from "../components/TableData";
import OrderHeagImg from '../images/OrderHeagImg.jpg'

function Orders() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data, key) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data, key) => data.userLost),
        backgroundColor: ["#fe7896", "#58d8a3", "#047edf"],
        borderColor: ["#e8e8f5"],
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="card  mt-1">
            <h1 className="card-text text-center fs-4 fw-bold ">
              Orders Dashboard
              <img src={OrderHeagImg} style={{height:"150px"}}/>
            </h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row ">
            <div className="col-lg-4 col-md-6 sm-12 p-1">
              <div className="card small-card1-bg-color">
                <div className="card-body">
                  <h1 className="card-title text-center">Top Sellers</h1>
                  <div className="d-flex justify-content-evenly">
                    <img
                      src={BiriyaniThump}
                      style={{ width: "50px" }}
                      alt=".food."
                    />
                    <h1 className="fs-5 ps-1 ">Biriyani</h1>
                    <h2 className="fs-5 ps-1 rounded  small-card3-bg-color ">
                      $66
                    </h2>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <img
                      src={alfamThump}
                      style={{ width: "50px" }}
                      alt=".food."
                    />
                    <h1 className="fs-5 ps-1 ">Alfaham</h1>
                    <h2 className="fs-5 ps-1 rounded  small-card3-bg-color ">
                      $26
                    </h2>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <img
                      src={mandiThump}
                      style={{ width: "50px" }}
                      alt=".food."
                    />
                    <h1 className="fs-5 ps-1 ">Mandhi</h1>
                    <h2 className="fs-5 ps-1 rounded  small-card3-bg-color ">
                      $126
                    </h2>
                  </div>
                </div>
                <button className="btn m-1 btn-primary small-card2-bg-color">
                  View Complete Report
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 sm-12 p-1">
              <div className="card small-card3-bg-color ">
                <div className="card-body">
                  <h1 className="card-title text-center fs-5">Top Sellers</h1>
                  <LineChart userData={userData} />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 sm-12 p-1">
              <div className="card small-card1-bg-color ">
                <div className="card-body">
                  <h1 className="card-title text-center">Top Sellers</h1>
                  <div className="d-flex justify-content-evenly">
                    <img
                      src={BiriyaniThump}
                      style={{ width: "50px" }}
                      alt=".food."
                    />
                    <h1 className="fs-5 ps-1 ">Biriyani</h1>
                    <h2 className="fs-5 ps-1 rounded  small-card3-bg-color ">
                      $66
                    </h2>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <img
                      src={alfamThump}
                      style={{ width: "50px" }}
                      alt=".food."
                    />
                    <h1 className="fs-5 ps-1 ">Alfaham</h1>
                    <h2 className="fs-5 ps-1 rounded  small-card3-bg-color ">
                      $26
                    </h2>
                  </div>
                  <div className="d-flex justify-content-evenly">
                    <img
                      src={mandiThump}
                      style={{ width: "50px" }}
                      alt=".food."
                    />
                    <h1 className="fs-5 ps-1 ">Mandhi</h1>
                    <h2 className="fs-5 ps-1 rounded  small-card3-bg-color ">
                      $126
                    </h2>
                  </div>
                </div>
                <button className="btn m-1 btn-primary small-card2-bg-color">
                  View Complete Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-title">
              <h1 className="text-center">All Orders</h1>
              <div className="card-body">
                <TableData />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
