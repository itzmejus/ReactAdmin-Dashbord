import React, { useState } from "react";
import { UserData } from "../Data/UsersLoginData";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import DoughnutChart from "../Charts/DoughnutChart";
import "../styles/dashStyle.css";
import PieChart from "../Charts/PieChart";
import PolarAreaChart from "../Charts/PolarAreaChart";
import cardHead from "../images/cardHead.png";
import cardHead2 from "../images/cardHead2.png";
function Dashboard() {
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
    <div className=" row ">
      <div className="  ">
        <div className="row mt-1 justify-content-center ">
          <div className="col-12 col-lg-12 my-1 ">
            <div className="card cardWelcome-bg-color text-white">
              <div className="card-header border-0 text-center headColor">
                <h1 className="card-title">Welcome Back !</h1>
                <p className="lead  card-subtitle">Admin Dashboard</p>
                <img src={cardHead} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="card">
                <div className=" cardRevenue-bg-color justify-content-center  d-flex  ">
                  <h1>Revenue :$35, 723</h1>
                  <i class="bi bi-briefcase-fill icon "></i>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="card ">
                <div className="  cardOrder-bg-color justify-content-center  d-flex ">
                  <h1>Orders: 1,235</h1>
                  <i class="bi bi-alarm icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 my-1">
              <div className="card text-dark ">
                <div className="card-header border-0 text-center">
                  <h1 className="card-title">Orders</h1>
                  <BarChart userData={userData} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 my-1 ">
              <div className="card  text">
                <div className="card-header border-0 text-center">
                  <h1 className="card-title">Average Price</h1>
                  <LineChart userData={userData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1 ">
          <div className="col-12 col-lg-6">
            <div className="container-fluid  global-bg-color ">
              <h1 className="text text-center">Orders List</h1>
              <table class="table   ">
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
                    <td>Larry the Bird</td>
                    <td>Miller</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className=" container-fluid global-bg-color ">
              <div className="container-fluid   ">
                <h1 className="text text-center">Cancelled Orders </h1>
                <table class="table  ">
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
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="card cardWelcome-bg-color border-0 text-white">
            <div className="card-header border-0 text-center headColor">
              <h1 className="card-title">Recent Orders</h1>
              <p className="lead card-subtitle"></p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-2 mb-2 ">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
            <div className="card global-bg-color">
              <div className="card-body ">
                <table class="table   ">
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
      {/* <div>
        <h1 className="text-white text-center pt-1">Admin Dashboard</h1>
      </div>
      <div className="col col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12 my-1  ">
        <div
          class="card d-none d-lg-block"
          style={{ backgroundColor: "#00163f" }}
        >
          <div class="card-body">
            <h5 className="text-center  text-white  pt-1">User Gained</h5>
            <hr className="text-danger  border-2" />
          </div>
          <PieChart userData={userData} />
        </div>
      </div>
      <div className="col col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12  my-1  ">
        <div class="card" style={{ backgroundColor: "#00163f" }}>
          <div class="card-body">
            <h5 className="text-center text-white pt-1">User Gained</h5>
            <hr className="text-danger  border-2" />
          </div>
          <LineChart userData={userData} />
        </div>
      </div>
      <div className="col col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12  my-1  ">
        <div class="card" style={{ backgroundColor: "#00163f" }}>
          <div class="card-body">
            <h5 className="text-center  text-white pt-1">User Gained</h5>
            <hr className="text-danger  border-2" />
          </div>
          <BarChart userData={userData} />
        </div>
      </div>
      <div className="col col-xl-3 col-lg-4 col-md-4 col-sm-12 col-xs-12  my-1  ">
        <div class="card" style={{ backgroundColor: "#00163f" }}>
          <div class="card-body">
            <h5 className="text-center  text-white pt-1">User Gained</h5>
            <hr className="text-danger  border-2" />
          </div>
          <DoughnutChart userData={userData} />
        </div>
      </div> */}
    </div>
  );
}

export default Dashboard;
