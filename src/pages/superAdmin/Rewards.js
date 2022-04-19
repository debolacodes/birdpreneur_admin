import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import AllStoresTable from './tables/AllStoresTable';
import ProductDeals from './tables/ProductDeals';

export default function Rewards() {
  const {
    totalStoresOverview,
  } = useContext(mainFunctions)
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Rewards"/>
            <div className="mainbar-container">
            <div style={{minHeight:"80px"}}>
              <div className="page-filter">
                <div className='btn_ btn_green mb-3'>NEW DEAL</div>
              </div>
              <div>
                <select className='select_' style={{marginTop:"13px"}}>
                  <option>Product Deals</option>
                  <option>Rewards</option>
                </select>
              </div>
            </div>
            <ProductDeals/>
            </div>
        </div>
    </div>
  )
}
