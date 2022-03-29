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
    },
    {
      name: 'Feb',
      sales: 3000,
    },
    {
      name: 'Mar',
      sales: 2000,
    },
    {
      name: 'Apr',
      sales: 2780,
    },
    {
      name: 'May',
      sales: 1890,
    },
    {
      name: 'June',
      sales: 2390,
    },
    {
      name: 'July',
      sales: 3490,
    },
    {
      name: 'Aug',
      sales: 3000,
    },
    {
      name: 'Sept',
      sales: 2000,
    },
    {
      name: 'Oct',
      sales: 2780,
    },
    {
      name: 'Nov',
      sales: 2390,
    },
    {
      name: 'Dec',
      sales: 3490,
    },
  ];

  const VISITS_DATA = [
    {
      name: 'Jan',
      visits: 600,
    },
    {
      name: 'Feb',
      visits: 400,
    },
    {
      name: 'Mar',
      visits: 8000,
    },
    {
      name: 'Apr',
      visits: 200,
    },
    {
      name: 'May',
      visits: 1890,
      
    },
    {
      name: 'June',
      visits: 2390,
    },
    {
      name: 'July',
      visits: 3490,
    },
    {
      name: 'Aug',
      visits: 3000,
    },
    {
      name: 'Sept',
      visits: 2000,
    },
    {
      name: 'Oct',
      visits: 2780,
    },
    {
      name: 'Nov',
      visits: 290,
    },
    {
      name: 'Dec',
      visits: 490,
    },
  ];

  const SALES_CHART_TAB = {id:"sales", title:"Quantity of Sales", data:SALES_DATA};
  const [activeChartTab, setActiveChartTab ] = useState(SALES_CHART_TAB);
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
          <Title title="Admin"/>
          <div className="wrapper">
            <SummaryBox title="Total Stores" value="2,403"/>
            <SummaryBox title="Total Sales Made" value="500,000"/>
            <SummaryBox title="Overall Active Customers" value="2,403"/>
          </div>
          <TabTitle pages={[SALES_CHART_TAB]} 
            active={activeChartTab} 
            setActive={setActiveChartTab} />
          <div className='col-12'>
            <BarChartComponent data={activeChartTab.data} dataKey={activeChartTab.id}/>
          </div>
          
          <Tables />

        
        
        </div>
        </div>
    </div>
  )
}
