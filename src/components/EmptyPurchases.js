import React from 'react'
import EmptyCart from "../assets/icons/empty_cart.svg"

export default function EmptyPurchases() {
  return (
    <div className='purchases_wrapper p-5 d-flex flex-column justify-content-between h-100'>
			<div className='d-flex justify-content-between'>
				<div className='title'>Active Purchases</div>
			</div>
			<div className='d-flex flex-column justify-content-center align-items-center'>
        <img src={EmptyCart} alt="img"/>
				<p>No Active Purchase Yet</p>
			</div>
			<div className='d-flex justify-content-center border-top p-5'>
				<div className='proceed_btn inactive'>Proceed</div>
			</div>

    </div>
  )
}
