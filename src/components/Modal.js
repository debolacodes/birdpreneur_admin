import React,{useContext} from 'react'

import {mainFunctions} from "../providers/MainProvider";

export default function Modal() {
    const {
        setShowModal,
        modalPage,
        modalData,
    } = useContext(mainFunctions)
  return (
    <div className='modal_box'>
        <div className='modal_inner'>
            <div className='modal_close' onClick={()=>setShowModal(false)}></div>
            
        </div>
    </div>
  )
}
