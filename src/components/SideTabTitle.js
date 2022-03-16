import React from 'react'

export default function SideTabTitle(props) {
  return (
    <div className='sidetab-title-wrapper'>
        {props.pages.map((thispage, index)=>{
            return(
                <div key={index} 
                  className={`page-title 
                    ${props.active.id === thispage.id ? "active":""}
                  `}
                  onClick={()=>props.setActive(thispage)}
                >
                  <div className='border-left'></div>
                  {thispage.title}
                  </div>
            )
        })
        }
    </div>
  )
}
