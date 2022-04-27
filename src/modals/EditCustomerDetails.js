import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

const AddUser = ({user}) => {
    const {
    setShowModal,
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
          Edit Customer Details
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
        <div className='auth_form_container'>
          <div className='fieldset'>
            <label className='label'>User Name</label>
            <div className='input_box'>
              <input 
                type="text" 
                onChange={()=>{}}
                defaultValue={user.name}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Email</label>
            <div className='input_box'>
              <input 
                type="email" 
                defaultValue={user.email}
                onChange={(e) => {}}
              />
            </div>
          </div>
          
          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Save</div>
        </div> 
    </div>
  )
}

export default AddUser