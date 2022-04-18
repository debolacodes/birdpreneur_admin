import React, { useState } from 'react'

const SelectDateRangeModal = ({
  getDateFilterFrom,
  getDateFilterTo
}) => {
  const [filterData, setFilterData] = useState({
    from: "",
    to: "",
  });
  const updateDateFilter = () => {
    getDateFilterFrom(filterData.from);
    getDateFilterTo(filterData.to);
  }
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
        Select Date Range  
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
      <div className='auth_form_container'>
        <div className='fieldset'>
          <label className='label'>Date From</label>
          <div className='input_box'>
            <input 
					    type="datetime-local"
              value={filterData.from}
              onChange={(e) => setFilterData({...filterData, from: e.target.value})}
            />
          </div>
        </div>
        <div className='fieldset'>
          <label className='label'>Date To</label>
          <div className='input_box'>
            <input 
              type="datetime-local" 
              value={filterData.to}
              onChange={(e) => setFilterData({...filterData, to: e.target.value})}
            />
          </div>
        </div>

        <button 
          className='btn_ btn_orange' 
          onClick={updateDateFilter}
          disabled={!filterData.from && !filterData.to}
        >Filter</button>
      </div> 
    </div>
  )
}

export default SelectDateRangeModal