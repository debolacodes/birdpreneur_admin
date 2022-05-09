import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";
import { formatToCurrency} from "../utils";
const AddDeal = () => {
    const {
    setShowModal,
    productsData,
    productDeals
    } = useContext(mainFunctions)
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
          Add Product Deal
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
        <div className='auth_form_container'>
          
          <div className='fieldset'>
            <label className='label'>Product</label>
            <div className='input_box'>
              <select>
                {productsData.map((row, index)=>{
                return(
                  <option value={row.id} key={index}>
                    {row.productName}
                  </option>
                )})}
              </select>
            </div>
            <label className='label'>Deal Type</label>
            <div className='input_box'>
              <select>
                {productDeals.map((row, index)=>{
                return(
                  <option value={row.id} key={index}>
                    {row.name}( ₦{formatToCurrency(row.price, 1)})
                  </option>
                )})}
              </select>
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {
            setShowModal(false)
          }}>Add Deal</div>
        </div> 
    </div>
  )
}

export default AddDeal