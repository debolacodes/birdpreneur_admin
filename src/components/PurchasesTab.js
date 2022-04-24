import React from 'react'

export default function PurchasesTab(props) {
  return (
    <div className={`purchase_tab_wrapper my-4 ${props.underline ? "underline" : ""}`}>
      {props.pages.map((thispage, index)=>{
        return(
          <div 
            key={index} 
            className={`purchase_tab-title pb-2 ${props.active.id === thispage.id ? "active":""}`}
            onClick={()=>props.setActive(thispage)}
          >{`Purchase ${index+1}`}</div>
        )
      })}
    </div>
  )
}
