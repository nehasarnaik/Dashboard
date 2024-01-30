import React from 'react';
import ReactApexChart from 'react-apexcharts';

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: 'FVOC',
        data: [0, 44, 8, 26, 12, 0, 4,0]
      }, {
        name: 'Growth Pod1',
        data: [0, 0, 0, 1, 0, 0, 0]
      },
      {
        name: 'Growth Pod2',
        data: [9, 22, 16, 18, 14, 3, 0,4,0]
      },
      {
        name: 'CCD',
        data: [0, 0, 0, 1, 0, 0, 5,0,7]
      },
      {
        name: 'Complaints',
        data: [3, 6, 12, 8, 9, 3, 0,0,0]
      }],
      options: {
        chart: {
          height: 600, // Adjust the height as needed
          width: '90%', // Adjust the width as needed
          type: 'line'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          // type: 'datetime',
          categories: ["9.4-9.5", "9.5-9.6", "9.6-10.1", "10.1-10.2", "10.2-10.3", "10.3-10.4", "10.4-10.5","10.5-106","10.6-10.7"]
        },
        yaxis: {
          tickAmount: 5, // Set the number of ticks on the y-axis
        },
        title: {
          text: 'Spill over user stories trend', // Set the title for the entire chart
          align: 'left', // Align the title to the center
          margin: 10, // Set margin for the title
          offsetX: 0, // Set horizontal offset for the title
          offsetY: 0, // Set vertical offset for the title
          floating: false, // Set to true if the title should be floating
          style: {
            color: 'rgb(25, 3, 103)', // Set the title color to violet
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={300} width={450}/>
      </div>
    );
  }
}

export default LineChart;
