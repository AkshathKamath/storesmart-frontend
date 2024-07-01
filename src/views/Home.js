import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <figure className="text-center">
          <blockquote className="blockquote">
            <p align="center">
              StoreSmart empowers local supermarkets to leverage data-driven
              insights and machine learning capabilities to stay competitive,
              enhance customer satisfaction, and drive business growth in the
              dynamic retail landscape.
            </p>
          </blockquote>
        </figure>
      </div>
      <div className="container mt-4">
        <form
          action="/analytics/form"
          method="post"
          encType="multipart/form-data"
          className="text-center"
        >
          <label className="form-label" htmlFor="file">
            <h6>Upload your store's new dataset:</h6>
          </label>
          <input type="file" className="form-control" name="file" id="file" />
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container mt-4">
        <h6>Or view past data analytics:</h6>
        <a href="/analytics/form" className="btn btn-primary">
          View Analytics
        </a>
      </div>
      <div className="container mt-5">
        <h6>Features and advantages</h6>
        <div className="list-group">
          <p className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <b className="mb-1">Increased Revenue and Sales</b>
            </div>
            <p className="mb-1">
              By optimizing inventory, supermarkets can increase sales by up to
              15%, leveraging data-driven insights to ensure popular items are
              always stocked while minimizing waste and maximizing
              profitability.
            </p>
          </p>
          <p className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <b className="mb-1">Operational Efficiency and Cost Savings</b>
            </div>
            <p className="mb-1">
              Streamline operations with automated analytics, saving up to 10%
              in staff time by efficiently managing inventory, predicting
              customer demand, and automating routine tasks, allowing staff to
              focus on delivering exceptional service and strategic initiatives.
            </p>
          </p>
          <p className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
              <b className="mb-1">Sales Forecasting</b>
            </div>
            <p className="mb-1">
              Predict future sales trends based on historical data, helping
              supermarkets optimize inventory and staffing by anticipating
              seasonal fluctuations, identifying emerging product trends, and
              ensuring the right mix of products are available to meet customer
              demand efficiently.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;