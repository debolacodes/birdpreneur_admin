import React from 'react'

export default function TabTitle(props) {
  return (
    <div className='tab-title-wrapper'>
        {props.pages.map((thispage, index)=>{
            return(
                <div key={index} className={`page-title ${props.active.id === thispage.id ? "active":""}`}
                onClick={()=>props.setActive(thispage)}
                >{thispage.title}</div>
            )
        })
        }
    </div>
  )
}
