import React from 'react'

export default function DetailsBox(props) {
  return (
    <div className='details_box col-sm-3'>
        <div className='title'>{props.title}</div>
        <div className='value'>{props.value}</div>
    </div>
  )
}
