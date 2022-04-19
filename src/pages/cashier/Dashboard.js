import React from 'react'
import TopBar from '../../components/TopBar';

export default function Dashboard() {
  return (
    <div className='body'>
        {/* <Sidebar /> */}
        <div className="mainbar w-100">
            <TopBar />
            <div className="mainbar-container">
                Stores
            </div>
        </div>
    </div>
  )
}
