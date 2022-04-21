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
        <div className='d-flex gap-5 align-items-center'>
          <div className='title'>{props.title}</div>
          {props.handleSearch &&
            <div className='search_wrapper'>
              <div className='icon search'></div>
              <input 
                className='search_input' 
                placeholder='Search...' 
                type="text"
                onChange={(e) =>
                  props.handleSearch(e.currentTarget.value)
                }
              />
            </div>
          }
        </div>
        <div className='align-right right-box'>
          {props.button &&
            <div className='btn_ btn_orange download_button'>{props.button.title}</div>
          }
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
