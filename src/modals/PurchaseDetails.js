import React from 'react'

const PurchaseDetailsModal = ({
  confirmPurchase
}) => {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
       Purchase Details
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
      <div className='pt-3 pb-0'>
        <div>
          <div>Total Amount</div>
          <div>N200,000</div>
        </div>
        <div>
          <img src={""} alt="barcode" />
        </div>

        <div className='btn_ btn_green mt-5'  onClick={confirmPurchase}>Confirm Manual Payment</div>
        <p 
          className='text-danger cursor-pointer'
          onClick={confirmPurchase}
        >Payment Not Made</p>
      </div> 
    </div>
  )
}

export default PurchaseDetailsModal