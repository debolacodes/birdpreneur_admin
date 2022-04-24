import React from 'react'

const UsePurchaseCodeModal = ({
}) => {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
        Use Customer Purchase Code
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
      <div className='auth_form_container'>
        <div className='fieldset'>
          <label className='label'>Purchase Code</label>
          <div className='input_box'>
            <input 
              type="text" 
              value={""}
              onChange={(e) => {}}
            />
          </div>
        </div>

        <div className='btn_ btn_green'  onClick={()=> {}}>Preview Purchase</div>
      </div> 
    </div>
  )
}

export default UsePurchaseCodeModal