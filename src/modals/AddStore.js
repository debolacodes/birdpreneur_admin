import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

const AddStore = ({product}) => {
    const {
    setShowModal,
    userRoles
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
          Add New Store
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
        <div className='auth_form_container'>
          <div className='fieldset'>
            <label className='label'>Store Name</label>
            <div className='input_box'>
              <input 
                type="text" 
                onChange={()=>{}}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Store Location</label>
            <div className='input_box'>
              <input 
                type="text" 
                value=""
                onChange={(e) => {}}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Store Manager</label>
            <div className='input_box'>
              <select>
              {userRoles.map((row, index)=>{
                return(
                  <option key={index}>{row.name}</option>
                )
              })}
              </select>
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Add Store</div>
        </div> 
    </div>
  )
}

export default AddStore