import React from 'react'
import Barcode from "../assets/images/barcode.png"
import { formatToCurrency } from '../utils';

const PurchaseDetailsModal = ({
  confirmPurchase,
  data
}) => {
  const getTotal =()=>{
    let total = 0;
    if(data)
      total = data.items.reduce((n, {price, quantity}) => n + (price * quantity), 0);
    return total+25;
  }
  return (
    <div className='purchase_details_modal w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
       Purchase Details
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
      <div className='pt-3 pb-0 w-100'>
        <div className='total_amount rounded mx-5 p-2'>
          <div className='total_title'>Total Amount</div>
          <div className='total_value'>₦{formatToCurrency(getTotal(), 1)}</div>
        </div>
        <div className='d-flex justify-content-center mt-4'>
          <img src={Barcode} alt="barcode" />
        </div>
        <div className='mt-5 w-100 d-flex align-items-center flex-column'>
          <div className='btn_ btn_green px-5'  onClick={()=>confirmPurchase(data)}>Confirm Manual Payment</div>
          <p 
            className='text-danger cursor-pointer mt-3'
            onClick={()=>confirmPurchase(data)}
          >Payment Not Made</p>
        </div>
      </div> 
    </div>
  )
}

export default PurchaseDetailsModal