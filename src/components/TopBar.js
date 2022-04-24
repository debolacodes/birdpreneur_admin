import React, {useContext, useState} from 'react'
import {mainFunctions} from "../providers/MainProvider";
import {
  useNavigate
} from "react-router-dom";

export default function TopBar(props) {
  const {
    setShowSidebar,
    logout
  } = useContext(mainFunctions)
  const navigate = useNavigate();
  const [showSetting, setShowSettings] = useState(false)
  return (
    <div className='topbar'>
        <div className="page-anchor"
        onClick={() =>{
          setShowSidebar(true)
        }}
        ></div>
        <div className='d-flex align-items-center'>
          {props.small &&
            <div className='back'>
              <div className='back_icon'></div>
              <div className="back_text"
              onClick={()=>navigate(-1)}
              >Back</div>
            </div>
          }
          <div className={`title ${props.small ? "small" : ""}`}>{props.title}</div>
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
            <div className='btn_ btn_orange download_button'
            onClick={()=>{props.buttonAction()}}
            >{props.button.title}</div>
          }
            <div className='profile'>
                <div className='avatar'></div>
                <div className='profile-details'>
                    <div className='username'>Mike James</div>
                    <div className='email'>mjames@email.com</div>
                </div>
                <div className='icon more'
                onClick={()=>setShowSettings(!showSetting)}
                ></div>
                {showSetting &&
                <div className='settings_dropdown'>
                  <div className='settings_dropdown_list'
                  onClick={()=>logout()}
                  >Logout</div>
                </div>
                }
            </div>
        </div>
    </div>
  )
}
