import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import Tables from '../../components/Tables';

export default function Customers() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Customers"/>
            <div className="mainbar-container">
            <div className="page-filter">
              <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
              <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
            </div>
              <Title title="Overview"/>
              <div className="wrapper">
                <SummaryBox title="Total No of Customers" value="2,403"/>
                <SummaryBox title="Active Customers/Day" value="2,400"/>
                <SummaryBox title="Active Customers Today" value="2,403"/>
              </div>

              <Tables />
            </div>
        </div>
    </div>
  )
}
