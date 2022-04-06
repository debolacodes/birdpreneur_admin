import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

export default function TopBar(props) {
  const {
    setShowSidebar
  } = useContext(mainFunctions)
  return (
    <div className='topbar'>
        <div className="page-anchor"
        onClick={() =>{
          setShowSidebar(true)
        }}
        ></div>
        <div className='title'>{props.title}</div>
        <div className='align-right right-box'>
            <div className='btn_ btn_orange download_button'>DOWNLOAD REPORT</div>
            <div className='profile'>
                <div className='avatar'></div>
                <div className='profile-details'>
                    <div className='username'>Mike James</div>
                    <div className='email'>mjames@email.com</div>
                </div>
                <div className='icon more'></div>
            </div>
        </div>
    </div>
  )
}
