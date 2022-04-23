import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import AllCustomersTable from './tables/AllCustomersTable';
import PageFilters from '../../components/PageFilters';

export default function Customers() {
  const {
    totalNoOfCustomers,
    activeNoOfCustomers,
    activeCustomersToday,

  } = useContext(mainFunctions)
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar 
              title="Customers" 
              button={{
                title: "DOWNLOAD REPORT"
              }}
              buttonAction={()=>{}}
            />
            <div className="mainbar-container">
              <PageFilters />
              <Title title="Overview"/>
              <div className="wrapper">
                <SummaryBox 
                title={totalNoOfCustomers.title} 
                value={totalNoOfCustomers.value}/>
                <SummaryBox 
                title={activeNoOfCustomers.title} 
                value={activeNoOfCustomers.value}/>
                <SummaryBox 
                title={activeCustomersToday.title} 
                value={activeCustomersToday.value}
                />
              </div>

              <AllCustomersTable />
            </div>
        </div>
    </div>
  )
}
