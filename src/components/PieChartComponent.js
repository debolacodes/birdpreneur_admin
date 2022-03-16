import React from 'react'

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { chartColors as COLORS} from './colors';

export default function PieChartComponent(props) {
 
  return (
    <div className='piechart_wrapper'>
      <div className='piechart'>
        <ResponsiveContainer>
        <PieChart >
          <Pie
            data={props.data}
            cx={80}
            cy={80}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {props.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
        </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='piechart_details'>
      {props.data.map((thisData, index)=>{
        return(
        <div className='piechart_details_item'>
          <div className='piechart_color_icon' style={{backgroundColor:COLORS[index % COLORS.length]}}></div>
          <span className='name'>{thisData.name} - </span>
          <span className='value'>{thisData.value} Sales</span>
        </div>
        )})}
      </div>
    </div>
  )
}
