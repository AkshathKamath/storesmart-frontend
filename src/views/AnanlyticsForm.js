import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NavbarComponent from "../components/Navbar";

const AnalyticsForm = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedOption, setSelectedOption] = useState("General Overview");
  const dropdownOptions = [
    { value: "gen", label: "General Overview" },
    { value: "store", label: "Store-Wise Product Analysis" },
    { value: "time", label: "Timeframe Analysis" },
  ];

  //Fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://44.216.20.188:8000/analytics/form"
        );
        // const response = await axios.get("api/analytics/form");
        // const response = await axios.get(
        //   "http://localhost:8000/analytics/form"
        // );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //For the dropdown
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitOption = (event) => {
    event.preventDefault();
    console.log("Selected option:", selectedOption);
    // Handle the selected option (e.g., send it to the server or use it in your logic)
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <NavbarComponent />
      <div className="container mt-4">
        <h3> Total number of transactions to be analyzed: {data.size} </h3>
        <br />
        <form onSubmit={handleSubmitOption}>
          <div className="mb-3">
            <label htmlFor="dropdown" className="form-label">
              Select analysis to view:
            </label>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleOptionChange}
              className="form-select"
            >
              {dropdownOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container ms-4" align="left">
        <h4>Viewing General Overview:</h4>
        <br />
        <h5>Financial Overview</h5>
        <img
          src="https://storesmart.s3.amazonaws.com/general_1.png"
          alt="Unable"
        />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">District</th>
              <th scope="col">Total Revenue($)</th>
              <th scope="col">Tax($)</th>
              <th scope="col">Net Profit($)</th>
              <th scope="col">Avg. Customer Rating</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.list1.map((obj, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td> {obj.Suburb} </td>
                <td> {obj.TotalAmountWithTax} </td>
                <td> {obj.Tax} </td>
                <td> {obj.NetProfit} </td>
                <td> {obj.CustomerRating} </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <h5>Customer Overview</h5>
        <img
          src="https://storesmart.s3.amazonaws.com/general_2.png"
          alt="Unable"
        />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Customer Type</th>
              <th scope="col">Count</th>
              <th scope="col">Avg. Customer Rating</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.list3.map((obj, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td> {obj.Ctype} </td>
                <td> {obj.count} </td>
                <td> {obj.CustomerRating} </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <h5>Products Overview</h5>
        <img
          src="https://storesmart.s3.amazonaws.com/general_3.png"
          alt="Unable"
        />
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Product Category</th>
              <th scope="col">Units Sold</th>
              <th scope="col">Cost of Goods($)</th>
              <th scope="col">Gross Margin(%)</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {data.list2.map((obj, index) => (
              <tr>
                <th scope="row"> {index + 1} </th>
                <td> {obj.Product} </td>
                <td> {obj.Quantity} </td>
                <td> {obj.cogs} </td>
                <td> {obj.gmp} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsForm;
