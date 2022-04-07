import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import Tables from '../../components/Tables';
import SummaryBox from '../../components/SummaryBox';

export default function Products() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Products"/>
            <div className="mainbar-container">
              <div className="page-filter">
                <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
                <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
              </div>
              <div className='btn_ btn_green mb-3'>ADD PRODUCT</div>
              <div className="wrapper">
                <SummaryBox title="Total Products" value="2,405" />
              </div>
              <Title title="Overall Overview (Naira)"/>
              
              <div className='col-sm-12'>
                <Tables/>
              </div>
            </div>
        </div>
    </div>
  )
}
