import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import SummaryBox from '../../components/SummaryBox';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import BarChartComponent from '../../components/BarchartComponent';
import RevenueTable from './tables/RevenueTable'

export default function Revenue() {
  
  const {
    revenueData,
    totalPurchasesOverview,
    totalRevenueMadeOverview
  } = useContext(mainFunctions)


  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Revenue" downloadReport={true}/>
            <div className="mainbar-container">
              <div className="page-filter">
                <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
                <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
              </div>
              <Title title="Overview"/>
              <div className="wrapper">
                <SummaryBox 
                title={totalPurchasesOverview.title} 
                value={totalPurchasesOverview.value} 
                comma={true} 
                />
                <SummaryBox 
                title={totalRevenueMadeOverview.title} 
                value={totalRevenueMadeOverview.value} 
                comma={true} 
                />
              </div>
              <Title title="Overall Overview (Naira)"/>
              <div className='wrapper'>
                <BarChartComponent 
                data={revenueData} 
                dataKey={"Revenue"}/>
              </div>
              <div className='col-sm-12'>
                <RevenueTable/>
              </div>
            </div>
        </div>
    </div>
  )
}
