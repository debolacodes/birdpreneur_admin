import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import SummaryBox from '../../components/SummaryBox';
import ProductTable from './tables/ProductTable';
export default function Products() {
  const {
    totalProductsOverview
  } = useContext(mainFunctions)

  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Products" downloadReport={true}/>
            <div className="mainbar-container">
              <div className="page-filter">
                <div className="button"><div className="text">All Stores</div><div className="icon down"></div></div>
                <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
              </div>
              <div className='btn_ btn_green mb-3'>ADD PRODUCT</div>
              <div className="wrapper">
                <SummaryBox 
                title={totalProductsOverview.title} 
                value={totalProductsOverview.value} 
                comma={true}
                />
              </div>
              <Title title="All Products"/>
              <div className='col-sm-12'>
                <ProductTable />
              </div>
            </div>
        </div>
    </div>
  )
}
