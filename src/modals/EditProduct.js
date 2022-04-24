import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";


const EditProduct = ({product}) => {
  const {
    setShowModal,
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
        Edit Product
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
                value={product.productName}
                onChange={()=>{}}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Unit Price</label>
            <div className='input_box'>
              <input 
                type="email" 
                value={product.price}
                onChange={(e) => {}}
              />
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Edit Product</div>
        </div> 
    </div>
  )
}

export default EditProduct