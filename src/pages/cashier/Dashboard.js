import React from 'react'
import TopBar from '../../components/TopBar';

export default function Dashboard() {
  return (
    <div className='body'>
        {/* <Sidebar /> */}
        <div className="mainbar w-100">
            <TopBar 
              title="All Products"
              handleSearch={() =>{}}
              button={{
                title: "Use Customer Purchase Code",
                action: () => {}
              }}
            />
            <div className="mainbar-container">
                Stores
            </div>
        </div>
    </div>
  )
}
