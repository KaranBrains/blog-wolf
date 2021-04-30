import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chart from "react-apexcharts";
import "./Dashboard.css";

function dashboard() {
  const state1 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const state2 = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      stroke: {
        curve: "smooth",
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <div>
      <Sidebar />
      <div className="conatiner my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-lg-0 padding-left-mobile ml-2">
            <div className="chart-space mb-0 py-0">
              <h2>Profile Visits</h2>
              <Chart
                options={state1.options}
                series={state2.series}
                type="bar"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-lg-0 padding-left-mobile ml-2">
            <div className="chart-space mb-0 py-0">
              <h2>New Users</h2>
              <Chart
                options={state1.options}
                series={state2.series}
                type="line"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-lg-0 padding-left-mobile ml-2">
            <div className="chart-space mb-0 py-0">
              <h2>New Blogs</h2>
              <Chart
                options={state1.options}
                series={state2.series}
                type="area"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-lg-0 padding-left-mobile ml-2">
            <div className="chart-space mb-0 py-0">
              <h2>New Comments</h2>
              <Chart
                options={state1.options}
                series={state2.series}
                type="heatmap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
