import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Chart from "react-apexcharts";

function dashboard() {
  const state = {
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

  return (
    <div>
      <Sidebar />
      <div className="conatiner my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="chart-space mb-0 py-0">
              <Chart options={state.options} series={state.series} type="bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
