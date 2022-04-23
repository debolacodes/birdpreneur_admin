import React, {useState, useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import PieChart from "../../components/PieChartComponent";
import SummaryBox from "../../components/SummaryBox";
import TabTitle from '../../components/TabTitle';
import Title from "../../components/Title";
import TopBar from "../../components/TopBar";
import BarChartComponent from '../../components/BarchartComponent';
import Sidebar from '../../components/Sidebar';
import StoresTable from './tables/StoresTable';
import PageFilters from '../../components/PageFilters';
export default function Dashboard() {

  const {
    totalSalesOverview,
    totalStoresOverview,
    activeCustomersOverview,
    top5SalesPeriod,
    top5Sales,
    salesData,
    visitsData,
  } = useContext(mainFunctions)

  const SALES_CHART_TAB = {id:"sales", title:"Quantity of Sales", data:salesData};
  const VISITS_CHART_TAB = {id:"visits", title:"Number of Visits", data:visitsData};
  const [activeChartTab, setActiveChartTab ] = useState(SALES_CHART_TAB);
  
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
        <TopBar 
          title="Dashboard"
          button={{
            title: "DOWNLOAD REPORT"
          }}
          buttonAction={()=>{}}
        />
        <div className="mainbar-container">
          <PageFilters />
          <Title title="Overview" marginBottom="0"/>
          <div className="wrapper">
            <SummaryBox 
            title={totalStoresOverview.title} 
            value={totalStoresOverview.value} 
            comma={true}/>
            <SummaryBox 
            title={totalSalesOverview.title} 
            value={totalSalesOverview.value} 
            currency={"₦"} 
            comma={true}/>
            <SummaryBox 
            title={activeCustomersOverview.title} 
            value={activeCustomersOverview.value} 
            comma={true} />
          </div>
          
          <TabTitle pages={[SALES_CHART_TAB, VISITS_CHART_TAB]} 
            active={activeChartTab} 
            setActive={setActiveChartTab} />
          <div className='col-12'>
            <BarChartComponent data={activeChartTab.data} dataKey={activeChartTab.id}/>
          </div>

          <div className="row">
            <div className="col-xs-12 col-md-6 col-sm-12">
              <Title title="Top 5 Stores"/>
              <PieChart data={top5Sales}/>
            </div>
            <div className="col-xs-12 col-md-6 col-sm-12">
              <Title title="Top Sales Period"/>
              <PieChart data={top5SalesPeriod}/>
            </div>
          </div>
          
          <StoresTable />

        
        
        </div>
        </div>
    </div>
  )
}
