import React from 'react'

const UsePurchaseCodeModal = ({
  previewPurchase
}) => {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
        Use Customer Purchase Code
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
      <div className='auth_form_container pt-3 pb-0'>
        <div className='fieldset pb-5'>
          <label className='label'>Purchase Code</label>
          <div className='input_box mb-5'>
            <input 
              type="text" 
              value={""}
              onChange={(e) => {}}
            />
          </div>
        </div>

        <div className='btn_ btn_green mt-5'  onClick={previewPurchase}>Preview Purchase</div>
      </div> 
    </div>
  )
}

export default UsePurchaseCodeModal