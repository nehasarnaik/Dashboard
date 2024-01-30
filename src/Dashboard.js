// Dashboard.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Dashboard.css';
import MainComponent from './LineChart'; // Adjust the import path accordingly
import PieChart from './PieChart';
import LineChart from './LineChart';
import RadialBar from './RadialBar';
import CandleStick from './CandleStick';
import AccessibleTable from './Table';
import ReleaseTable from './ReleaseTable';

function createData(name, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec) {
  return { name, Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec };
}

const rowsData1 = {
  rowsData:[
    createData('Manual work', 159, 6.0, 24, 4.0,159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
    createData('Automated tests duration', 237, 9.0, 37, 4.3,159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
    createData('total efforts for test results obtaining', 262, 16.0, 24, 6.0,159, 6.0, 24, 4.0,159, 6.0, 24, 4.0),
  ]
};

const rowsData2 = {
  rowsData:[
    createData('Accessibility Defects', 2, 0, 0, 0,0, 0, 0, 0,0, 0),
    createData('Security Defects', 1, 0, 0, 0,0, 0, 0, 0,0, 0),
    createData('Performance Defects', 1, 0, 0, 0,0, 0, 0, 0,0, 0),
    createData('Functional Defects', 3, 0, 0, 0,0, 0, 0, 0,0, 0),
    createData('Product Incident', 3, 0, 0, 0,0, 0, 0, 0,0, 0)
  ]
};

const Dashboard = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Sample release names
  const releaseNames = [
    'Release 1',
    'Release 2',
    'Release 3',
    'Release 4',
    'Release 5',
    'Release 6',
    'Release 7',
    'Release 8',
    'Release 9',
    'Release 10',
  ];

  const pieChartData1 = {
    title: 'ST/SIT-Planning',
    legendArray: ['Total User Stories', 'Signed-off User Stories', 'Spill over User Stories','Feature Files authored','Feature Files reviewed','Feature Files signed-off'], // Array of legends
    dataSeries: [6, 6, 0,112,112,112],
    width: 450,
    height: 750,
  };

  const pieChartData2 = {
    title: 'ST/SIT/Regression Execution',
    legendArray: ['Total Feature Files', 'Total Feature executed', 'Feature Files passed','Feature Files failed','Feature Files blocked','Feature Files deferred'], // Array of legends
    dataSeries: [271, 271, 259,8,1,0],
    width: 450,
    height: 750,
  };

  const pieChartData3 = {
    title: 'ST/SIT and Regression Defects Summary',
    legendArray: ['Total logged defects', 'Reopened defects', 'Blocker defects','Critical Defects','Major defects','Minor defects','Closed defects','Deferred defects'], // Array of legends
    dataSeries: [27, 9, 1, 8, 9,12,18,0],
    width: 450,
    height: 750,
  };

  const pieChartData4 = {
    title: 'ST/SIT-Planning',
    legendArray: ['Total User Stories', 'Signed-off User Stories', 'Spill over User Stories','Feature Files authored','Feature Files reviewed','Feature Files signed-off'], // Array of legends
    dataSeries: [0, 0, 0,0,0,0],
    width: 450,
    height: 750,
  };

  const RadialBarData1 = {
    title: 'Smoke Coverage',
    dataSeries: [100],
    width: 250,
    height: 450,
  };

  const RadialBarData2 = {
    title: 'Regression Coverage',
    dataSeries: [97],
    width: 250,
    height: 450,
  };

  const RadialBarData3 = {
    title: 'Functional Coverage',
    dataSeries: [98],
    width: 250,
    height: 450,
  };

  
  return (
    <animated.div style={fadeIn} className="dashboard-container">
      {/* <h1 className="dashboard-heading">CEP DASHBOARD</h1> */}
      <div className="header">
        <h1 className="dashboard-heading">CEP DASHBOARD</h1>
      </div>
      <h2>Summary</h2>
      <div className="chart-row">
      <ReleaseTable {...rowsData2}></ReleaseTable>
      </div>
      <h2>Functional Testing Summary</h2>
      {/* <div className="release-dropdown">
        <select id="releaseSelect">
          {releaseNames.map((release, index) => (
            <option key={index} value={release}>
              {release}
            </option>
          ))}
        </select>
      </div> */}
      {/* Your visualization components go here */}
      <div className="chart-row">
      <PieChart {...pieChartData1} />
        <PieChart {...pieChartData2}/>
        <PieChart {...pieChartData3}/>
      </div>
      <div className="chart-row">
        <div><LineChart /></div>
        <LineChart />
        <LineChart />
      </div>
      <h2>Functional Automation Summary</h2>
      <div className='dashboard-container'>
        <h3 style={{ align: 'center'}}>Smoke Test</h3>
        <div style={{ display: 'flex', width: '100%' }}>
        {/* Chart with 70% width */}
        <div style={{ flex: '20%', marginRight: '-10px' }}>
          <CandleStick />
        </div>

        {/* Radial Bar with 30% width */}
        <div style={{ flex: '20%' }}>
          <RadialBar {...RadialBarData1} />
        </div>
      </div>
      <AccessibleTable {...rowsData1}></AccessibleTable>
    </div>
    <div className='dashboard-container'>
        <h3 style={{ align: 'center'}}>Functional Test</h3>
        <div style={{ display: 'flex', width: '100%' }}>
        {/* Chart with 70% width */}
        <div style={{ flex: '20%', marginRight: '-10px' }}>
          <CandleStick />
        </div>

        {/* Radial Bar with 30% width */}
        <div style={{ flex: '20%' }}>
          <RadialBar {...RadialBarData3} />
        </div>
      </div>
      <AccessibleTable {...rowsData1}></AccessibleTable>
    </div>
    <div className='dashboard-container'>
        <h3 style={{ align: 'center'}}>Regression Test</h3>
        <div style={{ display: 'flex', width: '100%' }}>
        {/* Chart with 70% width */}
        <div style={{ flex: '20%', marginRight: '-10px' }}>
          <CandleStick />
        </div>

        {/* Radial Bar with 30% width */}
        <div style={{ flex: '20%' }}>
          <RadialBar {...RadialBarData2} />
        </div>
      </div>
      <AccessibleTable {...rowsData1}></AccessibleTable>
    </div>
    <h2>User Acceptance Testing Summary</h2>
      <div className="chart-row">
      <PieChart {...pieChartData1} />
        <PieChart {...pieChartData2}/>
        <PieChart {...pieChartData3}/>
      </div>
      <div className="chart-row">
        <div><LineChart /></div>
        <LineChart />
        <LineChart />
      </div>

    </animated.div>
  );
};

export default Dashboard;
