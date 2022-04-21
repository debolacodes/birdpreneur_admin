import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import SideTabTitle from '../components/SideTabTitle'
import TopBar from '../components/TopBar'
import Tables from '../components/Tables'
import Support from '../components/Support'

import { useSelector } from "react-redux";
import Input from '../components/Input'
import Security from '../components/Security'
import UserRoles from '../components/UserRoles'

export default function AccountSettings() {
	const { role } = useSelector(
		(state) => state.auth
	);
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
                pages={role === "superadmin" ? [SECURITY_TAB, USER_TAB, SUPPORT_TAB] : [SECURITY_TAB]}  
                active={activeChartTab} 
                setActive={setActiveChartTab} 
              />
              <div className='mainbar-container half-container'>
              
                {activeChartTab.id === "security" && (
                  <Security />
                )}
                {activeChartTab.id === "user" && (
                  <div>
                    <div className="page-filter" style={{
                      position:"unset",
                      width:"100%",
                      display:"flex", 
                      flexDirection:"row-reverse"
                    }}>
                    <div className='btn_ btn_orange mb-3' style={{position:"unset"}}>ADD USER</div>
              </div>
                  <UserRoles />
                  </div>
                )}
                {activeChartTab.id === "support" && (
                  <Support />
                )}
              </div>
            </div>
        </div>
    </div>
  )
}
