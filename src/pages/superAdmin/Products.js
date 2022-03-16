import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

export default function Products() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Products"/>
            <div className="mainbar-container">
                Products
            </div>
        </div>
    </div>
  )
}
