import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import SideTabTitle from '../components/SideTabTitle'
import TopBar from '../components/TopBar'
import Tables from '../components/Tables'

export default function AccountSettings() {
  const SECURITY_TAB = {id:"security", title:"Security"};
  const USER_TAB = {id:"user", title:"User & Roles"};
  const SUPPORT_TAB = {id:"support", title:"Support"};
  const [activeChartTab, setActiveChartTab ] = useState(SECURITY_TAB);
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Account Settings"/>
            <div className="mainbar-container full-width">
              <SideTabTitle 
                pages={[SECURITY_TAB, USER_TAB, SUPPORT_TAB]}  
                active={activeChartTab} 
                setActive={setActiveChartTab} 
              />
              <div className='mainbar-container half-container'>
                <Tables />
              </div>
            </div>
        </div>
    </div>
  )
}
