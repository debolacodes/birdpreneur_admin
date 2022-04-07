import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

export default function CustomerDetails() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Customer Details"/>
            <div className="mainbar-container">
                CustomerDetails
            </div>
        </div>
    </div>
  )
}
