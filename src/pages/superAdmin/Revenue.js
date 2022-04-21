import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import SummaryBox from '../../components/SummaryBox';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import BarChartComponent from '../../components/BarchartComponent';
import RevenueTable from './tables/RevenueTable'
import PageFilters from '../../components/PageFilters';
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
            <TopBar 
              title="Revenue"
              button={{
                title: "DOWNLOAD REPORT",
                action: () => {}
              }}
            />
            <div className="mainbar-container">
              <PageFilters />

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
