import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";
import { formatToCurrency} from "../utils";

const DeactivateUser = ({user}) => {
  const {
    setShowModal,
  } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
      </div>
      <p className='subtitle text-center'>
        Are you sure you want to deactivate this user? 
      </p>
      <p className='subtitle text-center'>
        <b>{user.name}</b>
      </p>
        <div className='auth_form_container'>
          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Deactivate User</div>
        </div> 
    </div>
  )
}

export default DeactivateUser