import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

export default function Customers() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Customers"/>
            <div className="mainbar-container">
                Customers
            </div>
        </div>
    </div>
  )
}
