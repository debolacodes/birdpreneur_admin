import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

export default function Stores() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Stores"/>
            <div className="mainbar-container">
                Stores
            </div>
        </div>
    </div>
  )
}
