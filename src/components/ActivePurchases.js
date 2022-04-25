import React from 'react'
import PurchaseItems from './PurchaseItems';
import PurchasesTab 
  from './PurchasesTab'


export default function ActivePurchases({
  purchases,
  addPurchase,
  handleProceed,
  deletePurchase,
  deletePurchaseItem,
  activeTab,
  setActiveTab,
  decreaseQty,
  increaseQty
}) {
  const onDeletePurchase =()=>{
    deletePurchase(activeTab);
  }
  return (
    <div className='purchases_wrapper p-5'>
      <div>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='title'>Active Purchases</div>
          <div 
            className='text-success cursor-pointer sub_title'
            onClick={() => addPurchase()}
          >+ Add A Purchase</div>
        </div>
        <div>
          <PurchasesTab 
            underline={true}
            pages={purchases} 
            active={activeTab} 
            setActive={setActiveTab} 
          />
          <PurchaseItems 
            activeTab={activeTab}
            items={activeTab.items}
            handleProceed={handleProceed}
            deletePurchase={onDeletePurchase}
            deletePurchaseItem={deletePurchaseItem}
            decreaseQty={decreaseQty}
            increaseQty={increaseQty}
          />


        </div>
      </div>
      

    </div>
  )
}
