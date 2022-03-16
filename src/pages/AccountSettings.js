import React from 'react'
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function AccountSettings() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Account Settings"/>
            <div className="mainbar-container">
                
            </div>
        </div>
    </div>
  )
}
