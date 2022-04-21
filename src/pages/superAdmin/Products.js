import React, {useContext} from 'react'
import {mainFunctions} from "../../providers/MainProvider";

import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import SummaryBox from '../../components/SummaryBox';
import ProductTable from './tables/ProductTable';
import PageFilters from '../../components/PageFilters';

export default function Products() {
  const {
    totalProductsOverview
  } = useContext(mainFunctions)

  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar 
              title="Products"
              button={{
                title: "DOWNLOAD REPORT",
                action: () => {}
              }}
            />
            <div className="mainbar-container">
              <PageFilters />
              <div className='btn_ btn_green mb-3'>ADD PRODUCT</div>
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
