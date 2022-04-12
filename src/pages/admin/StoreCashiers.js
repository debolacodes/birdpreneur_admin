import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import Tables from '../../components/Tables';

export default function Stores() {
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
            <div className='btn_ btn_green mb-3'>ADD A STORE</div>
            <Title title="Overview"/>
            <div className="wrapper">
              <SummaryBox title="Total Stores" value="2,403"/>
            </div>

            <Tables />
            </div>
        </div>
    </div>
  )
}