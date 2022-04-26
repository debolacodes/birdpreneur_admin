import React, {useContext, useEffect, useState} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Title from '../../components/Title';
import AllStoresTable from './tables/AllStoresTable';
import AddStore from '../../modals/AddStore';
import PageFilters from '../../components/PageFilters';
export default function Stores() {
  const {
    totalStoresOverview,
    setModalPage,
    setModalData,
    setShowModal,
    ADD_STORE_SUPER_MODAL,
  } = useContext(mainFunctions)

  
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar 
              title="Stores"
              button={{
                title: "DOWNLOAD REPORT"
              }}
              buttonAction={()=>{}}
            />
            <div className="mainbar-container">
            <PageFilters />
            <div className='btn_ btn_green mb-3'
            onClick={async ()=>{
              await setModalPage(ADD_STORE_SUPER_MODAL)
              await setModalData(<AddStore />)
              setShowModal(true)
            }}
            >ADD A STORE</div>
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
