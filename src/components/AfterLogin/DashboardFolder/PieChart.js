import React, { useState } from "react";
import { Chart } from "react-google-charts";

const PieChart = ({ bills }) => {
  const [month, setMonth] = useState("");
  console.log("pieChart", bills);
  const pieOptions = {
    is3D: true,
    title: "Monthly Sale",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673",
      },
      {
        color: "#d91e48",
      },
      {
        color: "#007fad",
      },
      {
        color: "#e9a227",
      },
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14,
      },
    },
    tooltip: {
      showColorCode: true,
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%",
    },
    fontName: "Roboto",
  };

  const handleChange = (e) => {
    setMonth(e.target.value);
  };

  const salePerMonth = bills.filter((ele) => {
    const res = ele.date.split("-");
    return res[1] === month;
  });
  console.log(salePerMonth);

  return (
    <div className="container-fluid">
      <div className="d-flex" style={{ marginTop: 20 }}>
        <div>
          <select onChange={handleChange}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div>
          <Chart
            chartType="PieChart"
            data={[
              ["Sale", "Total Bills"],
              ["Sale/Month", salePerMonth.length],
              ["Total Bills", bills.length],
            ]}
            options={pieOptions}
            graph_id="PieChart"
            width={"80vh"}
            height={"300px"}
            legend_toggle
          />
        </div>
        <div>
          <Chart
            chartType="AreaChart"
            data={[
              ["Sale", "Total Bills"],
              ["Total Bills", bills.length],
              ["Sale/Month", salePerMonth.length],
            ]}
            options={pieOptions}
            width="60vh"
            height="300px"
            legendToggle
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
