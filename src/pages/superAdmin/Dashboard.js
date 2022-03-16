import React, {useState} from 'react'
import PieChart from "../../components/PieChartComponent";
import SummaryBox from "../../components/SummaryBox";
import TabTitle from '../../components/TabTitle';
import Title from "../../components/Title";
import TopBar from "../../components/TopBar";
import BarChartComponent from '../../components/BarchartComponent';
import Sidebar from '../../components/Sidebar';
import Tables from '../../components/Tables';

export default function Dashboard() {
  const SALES_CHART_TAB = {id:"sales", title:"Quantity of Sales"};
  const VISITS_CHART_TAB = {id:"visits", title:"Number of Visits"};
  const [activeChartTab, setActiveChartTab ] = useState(SALES_CHART_TAB);

  const TOP_5_SALES =  [
    { name: 'KFC Wuse', value: 780 },
    { name: 'KFC Egbeda', value: 740 },
    { name: 'KFC VI 2', value: 700 },
    { name: 'KFC VI', value: 600 },
    { name: 'KFC Banana Island', value: 523 },
  ];
  const TOP_5_SALES_PERIOD =  [
    { name: 'January', value: 1080 },
    { name: 'November', value: 910 },
    { name: 'March', value: 880 },
    { name: 'June', value: 810 },
    { name: 'August', value: 723 },
  ];
  const SALES_DATA = [
    {
      name: 'Jan',
      sales: 4000,
      amt: 2400,
    },
    {
      name: 'Feb',
      sales: 3000,
      amt: 2210,
    },
    {
      name: 'Mar',
      sales: 2000,
      amt: 2290,
    },
    {
      name: 'Apr',
      sales: 2780,
    },
    {
      name: 'May',
      sales: 1890,
      amt: 2181,
    },
    {
      name: 'June',
      sales: 2390,
      amt: 2500,
    },
    {
      name: 'July',
      sales: 3490,
      amt: 2100,
    },
    {
      name: 'Aug',
      sales: 3000,
      amt: 2210,
    },
    {
      name: 'Sept',
      sales: 2000,
      amt: 2290,
    },
    {
      name: 'Oct',
      sales: 2780,
    },
    {
      name: 'May',
      sales: 1890,
      amt: 2181,
    },
    {
      name: 'Nov',
      sales: 2390,
      amt: 2500,
    },
    {
      name: 'Dec',
      sales: 3490,
      amt: 2100,
    },
  ];
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
        <TopBar title="Dashboard" />
        <div className="mainbar-container">
          <div className="page-filter">
            <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
            <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
          </div>
          <Title title="Overview"/>
          <div className="wrapper">
            <SummaryBox title="Total Stores" value="2,403"/>
            <SummaryBox title="Total Sales Made" value="500,000"/>
            <SummaryBox title="Overall Active Customers" value="2,403"/>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <Title title="Top 5 Stores"/>
              <PieChart data={TOP_5_SALES}/>
            </div>
            <div className="col-sm-6">
              <Title title="Top Sales Period"/>
              <PieChart data={TOP_5_SALES_PERIOD}/>
            </div>
          </div>
          <TabTitle pages={[SALES_CHART_TAB, VISITS_CHART_TAB]} 
            active={activeChartTab} 
            setActive={setActiveChartTab} />
          <div className='col-12'>
            <BarChartComponent data={SALES_DATA}/>
          </div>
          
          <Tables />

        
        
        </div>
        </div>
    </div>
  )
}
