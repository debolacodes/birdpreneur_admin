import React, { useRef, useEffect} from 'react'

export default function DetailsBox({title, value}) {
  const spanRef = useRef(null);
  useEffect(() => {
    if (spanRef.current) {
      spanRef.current.innerHTML = value;
    }
  }, [value]);
  return (
    <div className='details_box col-sm-3'>
        <div className='title'>{title}</div>
        <div className='value' ref={spanRef}></div>
    </div>
  )
}
