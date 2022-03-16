import React from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

export default function Revenue() {
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Revenue"/>
            <div className="mainbar-container">
                Revenue
            </div>
        </div>
    </div>
  )
}
