import React, {useState, useEffect} from 'react'

export default function SummaryBox(props) {
  const [value, setValue] = useState(0)
  const [currency, setCurrency] = useState("")
  useEffect(()=>{
    if(props.value){
      if(props.comma){
        setValue(Number(props.value).toLocaleString())
      }else{
        setValue(props.value)
      }
    }
  },[props.comma, props.value])

  useEffect(() => {
    if(props.currency){
      setCurrency(props.currency)
    }
  },[props.currency])
  return (
    <div className='summary_box'>
        <div className='title'>{props.title}</div>
        <div className='value'>{currency}{value}</div>
    </div>
  )
}
