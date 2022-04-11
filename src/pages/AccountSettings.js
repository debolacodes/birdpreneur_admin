import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import SideTabTitle from '../components/SideTabTitle'
import TopBar from '../components/TopBar'
import Tables from '../components/Tables'
import { useSelector } from "react-redux";

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
                  <>
                    <div className='auth_form'>
                      <div className='auth_form_container'>
                        <div className='fieldset'>
                          <label className='label'>Old Password</label>
                          <div className='input_box'>
                            <input type="password" />
                            <span className='togglepassword'>Hide</span>
                          </div>
                        </div>
                        <div className='fieldset'>
                          <label className='label'>New Password</label>
                          <div className='input_box'>
                            <input type="password" />
                            <span className='togglepassword'>Hide</span>
                          </div>
                        </div>
                        <div className='fieldset'>
                          <label className='label'>Confirm New Password</label>
                          <div className='input_box'>
                            <input type="password" />
                            <span className='togglepassword'>Hide</span>
                          </div>
                        </div>
                        <div className='btn_ btn_orange'  onClick={()=> {}} >Save Changes</div>
                      </div>
                    </div>
                  </>
                )}
                {activeChartTab.id === "user" && (
                  <Tables />
                )}
                {activeChartTab.id === "support" && (
                  <Tables />
                )}
              </div>
            </div>
        </div>
    </div>
  )
}
