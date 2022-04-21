import React, {useState, useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

export default function PageFilters({
  showStoreFilter=true,
  showDateFilter=true
}) {
  const {
    dateFilter, 
    setDateFilter,
    storeFilter, 
    setStoreFilter,
    stores,
    filterDates
  } = useContext(mainFunctions)
  const [showLocations, setShowLocations] = useState(false)
  const [showDates, setShowDates] = useState(false)

  return (
    <div className="page-filter justify-content-end gap-2">
      { showStoreFilter &&
        <div className='page-filter-box'>
          <div className="button"
          onClick={()=>setShowLocations(!showLocations)}
          ><div className="text">All Stores</div><div className={`icon ${showLocations ? "up": "down"} `}></div></div>
          {showLocations &&
          <div className='page-filter-options'>
            <div  className={`page-filter-option ${storeFilter.id === 0 ? "active": ""}`}
            onClick = {()=>{
              setStoreFilter({id:0, store: "All Stores"})
              console.log(storeFilter)
            }}
            >All Locations</div>

            {stores.map((thisStore, index)=>{
            return(
              <div className={`page-filter-option ${thisStore.id === storeFilter.id ? "active": ""}`}  key={index} 
              onClick={()=>{
                setStoreFilter(thisStore)
              }}>
                {thisStore.name}
              </div>
            )
            })}  
            
          </div>
          }
        </div>
      }
      { showDateFilter &&
        <div className='page-filter-box'>
          <div className="button"
          onClick={()=>setShowDates(!showDates)}
          ><div className="text">This Year</div><div className={`icon ${showDates ? "up": "down"} `}></div></div>
          {showDates &&
          <div className='page-filter-options'>
            {filterDates.map((thisDate, index)=>{
            return(
              <div  className={`page-filter-option ${thisDate.id === dateFilter.id ? "active": ""}`} key={index}
              onClick={()=>{
                setDateFilter(thisDate)
              }}
              >{thisDate.title}</div>
            )
            })}
          </div>
          }
        </div>
      }
    </div>
  )
}
