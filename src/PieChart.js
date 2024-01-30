// PieChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: props.dataSeries || [44, 55, 41, 17, 15],
      options: {
        chart: {
          width: 450,
          height: 450,
          type: 'donut',
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
          },
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (val, opts) {
            const index = opts.seriesIndex;
            return props.legendArray[index] +"-"+opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: props.title || 'Gradient Donut with custom Start-angle',
          align: 'left', // Align the title to the center
          style: {
            color: 'rgb(25, 3, 103)', // Set the title color to violet
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: props.mobileWidth || 500,
                height: props.mobileHeight || 550,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={450}
        />
      </div>
    );
  }
}

export default PieChart;
