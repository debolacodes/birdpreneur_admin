import React, {useContext, useState, useEffect} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import SummaryBox from '../../components/SummaryBox';
import ProductTable from './tables/ProductTable';
import PageFilters from '../../components/PageFilters';
import AddProduct from "../../modals/AddProduct"

export default function Products() {
  const {
    totalProductsOverview,
    ADD_PRODUCT_MODAL,
    setModalPage,
    setShowModal,
    setModalData
  } = useContext(mainFunctions)

  const [productModal, setProductModal] = useState("")

 

  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar 
              title="Products"
              button={{
                title: "DOWNLOAD REPORT"
              }}
              buttonAction={()=>{}}
            />
            <div className="mainbar-container">
              <PageFilters />
              <div className='btn_ btn_green mb-3'
              onClick={async ()=>{
                await setModalPage(ADD_PRODUCT_MODAL);
                await setModalData(
                  <AddProduct />
                )
                await setShowModal(true);
              }}
              >ADD PRODUCT</div>
              <div className="wrapper">
                <SummaryBox 
                title={totalProductsOverview.title} 
                value={totalProductsOverview.value} 
                comma={true}
                />
              </div>
              <div className='col-sm-12'>
                <ProductTable />
              </div>
            </div>
        </div>
    </div>
  )
}
