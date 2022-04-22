import React,{useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../providers/MainProvider";
import Sidebar from '../components/Sidebar'
import SideTabTitle from '../components/SideTabTitle'
import TopBar from '../components/TopBar'
import Tables from '../components/Tables'
import Support from '../components/Support'

import { useSelector } from "react-redux";
import Input from '../components/Input'
import Security from '../components/Security'
import UserRoles from '../components/UserRoles'
import AddUser from '../modals/AddUser';
import EditUser from '../modals/EditUser';
import DeactivateUser from '../modals/DeactivateUser';

export default function AccountSettings() {

  const {
    userRoles,
    setModalPage,
    setModalData,
    setShowModal,
    EDIT_USER_MODAL,
    ADD_USER_MODAL,
    DEACTIVATE_USER_MODAL
  } = useContext(mainFunctions)

  const [userModal, setUserModal] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    if(userModal ){
      if(userModal === "add"){
        setModalPage(ADD_USER_MODAL)
        setModalData(<AddUser />);
      }else if(userModal === "edit" && currentUser !== null){
        setModalPage(EDIT_USER_MODAL)
        setModalData(<EditUser user={currentUser}/>);
      }
      else if(userModal === "deactivate" && currentUser !== null){
        setModalPage(DEACTIVATE_USER_MODAL)
        setModalData(<DeactivateUser user={currentUser}/>);
      }
      setShowModal(true);
    }
    //eslint-disable-next-line
  }, [userModal]);



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
                      <div className='btn_ btn_orange mb-3' style={{position:"unset"}}
                      onClick={async ()=>{
                        await setModalPage(ADD_USER_MODAL)
                        await setModalData(<AddUser />);
                        setShowModal(true)
                      }}
                      >ADD USER</div>
                    </div>
                    <UserRoles 
                    setUserModal={setUserModal}
                    setCurrentUser={setCurrentUser}
                    setModalPage={setModalPage}
                    setModalData={setModalData}
                    setShowModal={setShowModal}
                    EDIT_USER_MODAL={EDIT_USER_MODAL}
                    DEACTIVATE_USER_MODAL={DEACTIVATE_USER_MODAL}
                    />
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
