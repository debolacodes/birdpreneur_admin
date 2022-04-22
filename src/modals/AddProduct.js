import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

const AddProduct = ({product}) => {
    const {
    setShowModal,
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
          Add Product
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
        <div className='auth_form_container'>
          <div className='fieldset'>
            <label className='label'>Product Name</label>
            <div className='input_box'>
              <input 
                type="text" 
                onChange={()=>{}}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Unit Price</label>
            <div className='input_box'>
              <input 
                type="email" 
                value=""
                onChange={(e) => {}}
              />
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Add Product</div>
        </div> 
    </div>
  )
}

export default AddProduct