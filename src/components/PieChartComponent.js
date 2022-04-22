import { act } from '@testing-library/react';
import React, {useEffect, useState} from 'react'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';
import { chartColors as COLORS} from './colors';

export default function PieChartComponent({data, setActive}) {
  
  const [activeIndex, setActiveIndex] = useState(-1)

  const renderActiveShape = (props) => {
    
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    
    const sin = Math.sin(-RADIAN * midAngle);
    // const cos = Math.cos(-RADIAN * midAngle);
    const jx = startAngle > 180 || startAngle === 0 ? cx  : cx - 70
    const jy = (cy + (outerRadius) * sin) - 25;
    return (
      <g>
      <g id='active-sector'>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        
        />
        <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 2}
        outerRadius={outerRadius + 3}
        fill={fill}
      />
        
        
      </g>
      <g id='tooltip'>
        {/* <rect fill="#353535" width="100" height="18"></rect> */}
        <svg x={jx} y={jy}>
        <path fill="#353535" d="M2.16,9C0.972,9,0,9.972,0,11.16v14.68C0,27.028,0.972,28,2.16,28h93.68c1.188,0,2.16-0.972,2.16-2.16V11.16
	C98,9.972,97.028,9,95.84,9H2.16z"/>
        </svg>
        <text x={jx} y={jy+4}  transform="matrix(1 0 0 1 7.9434 17.5522)" fill="#FFFFFF" fontSize="9">
          {payload.name.slice(0,9)} - {`(${(percent * 100).toFixed(1)}%)`}
        </text>
      </g>
      </g>
      
    );
  }


  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  };

  const removeOver = (_, index) => {
    setActiveIndex(-1)
  }

  useEffect(()=>{
    if(setActive){
      setActive(activeIndex)
    }
  },[activeIndex])

  return (
    <div className='piechart_wrapper'>
      <div className='piechart'>
        <ResponsiveContainer>
        <PieChart >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseMove={onPieEnter}
            onMouseLeave={removeOver}
            data={data}
            cx={80}
            cy={80}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
        </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='piechart_details'>
      {data.map((thisData, index)=>{
        return(
        <div className={`piechart_details_item ${activeIndex === index ? "active" : ""}`} key={`pieehart-details-${index}`}>
          <div className='piechart_color_icon' style={{backgroundColor:COLORS[index % COLORS.length]}}></div>
          <span className='name'>{thisData.name} -&nbsp; </span>
          <span className='value'> {` ${thisData.value}`} Sales</span>
        </div>
        )})}
      </div>
    </div>
  )
}
