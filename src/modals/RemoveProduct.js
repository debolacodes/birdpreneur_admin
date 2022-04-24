import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

const RemoveProduct = ({product}) => {
  const {
    setShowModal,
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
      </div>
      <p className='subtitle text-center'>
        Are you sure you want to remove this product. 
      </p>
      <p className='subtitle text-center'>
        <b>{product.productName}</b>
      </p>
        <div className='auth_form_container'>
          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Remove Product</div>
        </div> 
    </div>
  )
}

export default RemoveProduct