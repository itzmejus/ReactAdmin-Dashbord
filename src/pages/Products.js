import React from "react";
import TableData from "../components/TableData";
import productsHeadImg from '../images/productsHeadImg.jpg'
function Products() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="card  mt-1">
            <h1 className="card-text text-center fs-4 fw-bold ">
              Products Dashboard
              <img src={productsHeadImg} style={{height:"150px"}}/>
            </h1>
          </div>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card small-card1-bg-color mt-1">
                <div className="card-body d-flex justify-content-evenly">
                  <h1 className="card-title fs-5 text-center">
                    Total Products
                  </h1>
                  <h1 className="card-title fs-3  text-center fw-bold">564</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card small-card3-bg-color mt-1">
                <div className="card-body d-flex justify-content-evenly">
                  <h1 className="card-title fs-5 text-center">
                    {" "}
                    Clients Profit
                  </h1>
                  <h1 className="card-title fs-3  text-center fw-bold">
                    $675K
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card small-card2-bg-color mt-1">
                <div className="card-body d-flex justify-content-evenly">
                  <h1 className="card-title fs-5 text-center">
                    People Interested
                  </h1>
                  <h1 className="card-title fs-3  text-center fw-bold">68%</h1>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="card small-card1-bg-color mt-1">
                <div className="card-body d-flex justify-content-evenly">
                  <h1 className="card-title fs-5 text-center">
                    Upcoming Products
                  </h1>
                  <h1 className="card-title fs-3 text-center  fw-bold">231</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
              <div className="card">
                <div className="card  small-card1-bg-color ">
                  <div className="card-body ">
                    <h1 className="card-text text-center fw-bold fs-5">
                      Add New Product
                    </h1>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-1">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="name"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-1">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Category"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-1">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Price"
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-1">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tags"
                        />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-1">
                        <textarea
                          class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          placeholder="Description About Product"
                        ></textarea>
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
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
              <div className="card small-card2-bg-color">
                <div className="card-title">
                  <h1 className="card-text text-center">All Products</h1>
                  <div className="card-body ">
                    <TableData/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
