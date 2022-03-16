import React from 'react'

export default function SummaryBox(props) {
  return (
    <div className='summary_box'>
        <div className='title'>{props.title}</div>
        <div className='value'>{props.value}</div>
    </div>
  )
}
