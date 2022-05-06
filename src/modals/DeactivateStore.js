import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

const DeactivateStore = ({store, active}) => {
  const {
    setShowModal,
  } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
        {active ? "Deactivate Store" : "Activate Store"}
      </div>
      <p className='subtitle text-center'>
        Are you sure you want to {active ? "deactivate" : "activate"} this store? 
      </p>
      <p className='subtitle text-center'>
        <b>{store.store}</b>
      </p>
        <div className='auth_form_container'>
          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>{active ? "Deactivate Store" : "Activate Store"}</div>
        </div> 
    </div>
  )
}

export default DeactivateStore