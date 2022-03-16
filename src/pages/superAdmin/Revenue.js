import React from 'react'
import Sidebar from '../../components/Sidebar';
import SummaryBox from '../../components/SummaryBox';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import BarChartComponent from '../../components/BarchartComponent';
import Tables from '../../components/Tables';

export default function Revenue() {
  const Revenue_DATA = [
    {
      name: 'Jan',
      Revenue: 4000,
    },
    {
      name: 'Feb',
      Revenue: 3000,
    },
    {
      name: 'Mar',
      Revenue: 2000,
    },
    {
      name: 'Apr',
      Revenue: 2780,
    },
    {
      name: 'May',
      Revenue: 1890,
    },
    {
      name: 'June',
      Revenue: 2390,
    },
    {
      name: 'July',
      Revenue: 3490,
    },
    {
      name: 'Aug',
      Revenue: 3000,
    },
    {
      name: 'Sept',
      Revenue: 2000,
    },
    {
      name: 'Oct',
      Revenue: 2780,
    },
    {
      name: 'Nov',
      Revenue: 2390,
    },
    {
      name: 'Dec',
      Revenue: 3490,
    },
  ];
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Revenue"/>
            <div className="mainbar-container">
              <div className="page-filter">
                <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
                <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
              </div>
              <Title title="Overview"/>
              <div className="wrapper">
                <SummaryBox title="Total Purchases" value="2,405" />
                <SummaryBox title="Total Revenue Made" value="N345,000" />
              </div>
              <Title title="Overall Overview (Naira)"/>
              <div className='wrapper'>
                <BarChartComponent data={Revenue_DATA} dataKey={"Revenue"}/>
              </div>
              <div className='col-sm-12'>
                <Tables/>
              </div>
            </div>
        </div>
    </div>
  )
}
