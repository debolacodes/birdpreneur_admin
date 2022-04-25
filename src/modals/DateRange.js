import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

const AddUser = ({product}) => {
    const {
    setShowModal,
    allUserRoles
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
          Select Date Range
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
        <div className='auth_form_container'>
          
          <div className='fieldset'>
            <label className='label'>Date From</label>
            <div className='input_box'>
             <input type="date" style={{width:"100%"}}></input>
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Date to</label>
            <div className='input_box'>
              <input type="date" style={{width:"100%"}}></input>
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Filter</div>
        </div> 
    </div>
  )
}

export default AddUser