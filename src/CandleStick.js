// LineChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const CandleStick = () => {
  const optionsLine = {
    chart: {
      height: 328,
      type: 'line',
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    series: [
      {
        name: 'Music',
        data: [1, 15, 26, 20, 33, 27,8, 15, 26, 20, 33, 27],
      },
      {
        name: 'Photos',
        data: [3, 33, 21, 42, 19, 32,31, 33, 21, 42, 19, 32],
      },
      {
        name: 'Files',
        data: [0, 39, 52, 11, 29, 43,20, 39, 52, 11, 29, 43],
      },
    ],
    title: {
      text: 'Smoke test duration, Hrs',
      align: 'left',
      offsetY: 25,
      offsetX: 20,
    },
    subtitle: {
    //   text: 'Statistics',
      offsetY: 55,
      offsetX: 20,
    },
    markers: {
      size: 6,
      strokeWidth: 0,
      hover: {
        size: 9,
      },
    },
    grid: {
      show: true,
      padding: {
        bottom: 0,
      },
    },
    labels: [
      'Jan-23',
      'Feb-23',
      'Mar-23',
      'Apr-23',
      'May-23',
      'Jun-23',
      'Jul-23',
      'Aug-23',
      'Sep-23',
      'Oct-23',
      'Nov-23',
      'Dec-23',
    ],
    xaxis: {
      
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -20,
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={optionsLine} series={optionsLine.series} type="line" height={350} width={1150}/>
    </div>
  );
};

export default CandleStick;
