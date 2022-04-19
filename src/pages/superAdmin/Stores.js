import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import AllStoresTable from './tables/AllStoresTable';

export default function Stores() {
  const {
    totalStoresOverview,
    storeList
  } = useContext(mainFunctions)
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Stores"/>
            <div className="mainbar-container">
            <div className="page-filter">
              <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
              <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
            </div>
            <div className='btn_ btn_green mb-3'>ADD A STORE</div>
            <Title title="Overview"/>
            <div className="wrapper">
              <SummaryBox 
              title={totalStoresOverview.title} 
              value={totalStoresOverview.value}/>
            </div>

            <AllStoresTable />
            </div>
        </div>
    </div>
  )
}
