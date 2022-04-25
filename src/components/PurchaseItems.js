import React from 'react'
import { formatToCurrency } from "../utils";

export default function PurchaseItems({
  activeTab,
  items,
  handleProceed,
  deletePurchase,
  deletePurchaseItem,
  decreaseQty,
  increaseQty
}) {
  const getTotal =()=>{
    let total = 0;
    if(items)
      total = items.reduce((n, {price, quantity}) => n + (price * quantity), 0);
    return total;
  }
  return (
    <div className='d-flex flex-column gap-5 justify-content-between h-100'>
      <div className='purchase_items_wrapper'>
        {items && items.length > 0 && items.map((item, index) => (
          <div key={index} className='purchase_item d-flex justify-content-between align-items-center border-bottom py-3'>
            <div className='d-flex align-items-center gap-3'>
              <img src={require("../"+item.image)} alt=""/>
              <div className='d-flex flex-column'>
                <span className='purchase_item_title'>{item.productName}</span>
                <span 
                  className='purchase_item_delete'
                  onClick={()=> deletePurchaseItem(item)}
                >remove Item</span>
              </div>
            </div>
            <div className='d-flex flex-column align-items-end'>
              <span className='checkout_value'>₦{formatToCurrency(item.price, 1)}</span>
              <div className='purchase_item_quantity'>
                <span 
                  className='decrease' 
                  onClick={() => decreaseQty(item)}
                >-</span>
                <span className='value'>{item.quantity}</span>
                <span 
                  className='increase'
                  onClick={() => increaseQty(item)}
                >+</span>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className=''>
        <div className='d-flex flex-column border-top py-3'>
          <div className='d-flex justify-content-between'>
            <p className='checkout_title'>Total Amount</p>
            <p className='checkout_value'>₦{formatToCurrency(getTotal(), 1)}</p>
          </div>
          <div className='d-flex justify-content-between'>
            <p className='checkout_title'>VAT</p>
            <p className='checkout_value'>₦25</p>
          </div>
        </div>
        <div className='d-flex flex-column align-items-center border-top gap-4 p-5'>
          <div 
            className='proceed_btn'
            onClick={handleProceed}
          >Proceed</div>
          <p 
            className='text-danger cursor-pointer'
            onClick={deletePurchase}
          >Delete this Purchase</p>
        </div>
      </div>
    </div>
  )
}
