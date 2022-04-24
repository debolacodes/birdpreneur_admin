import React, {useState} from 'react'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from 'recharts';
import { chartColors as COLORS} from './colors';

export default function PieChartComponent(props) {
  
  const [activeIndex, setActiveIndex] = useState(0)
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = (cx + (outerRadius) * cos);
    const sy = (cy + (outerRadius) * sin);
    const jx = endAngle > 180 ? cx : cx - 90
    const jy = cy - 9
    const textAnchor = cos >= 0 ? 'start' : 'end';
    return (
      <div>
      <g>
          
          {/* <path fill="#353535" d="M54.852,28l8.211,9.677c0,0,0.125,0.151,0.253,0S71.527,28,71.527,28H54.852z"/> */}
          {/* <text transform="matrix(1 0 0 1 7.9434 17.5522)" fill="#FFFFFF" font-size="10">
            {payload.name} <br/> {`(${(percent * 100).toFixed(2)}%)`}</text> */}
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
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
        <rect x={jx} y={jy} fill="#353535" width="100" height="18">
        </rect>
        <text x={jx} y={jy - 6}  transform="matrix(1 0 0 1 7.9434 17.5522)" fill="#FFFFFF" font-size="10">
        {/* {payload.name.slice(0, 9)}  */}
        {Math.ceil(startAngle)} {Math.ceil(endAngle)}
        {`(${(percent * 100).toFixed(2)}%)`}
        </text>
        
      </g>
      </div>
    );
  }


  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  };

  return (
    <div className='piechart_wrapper'>
      <div className='piechart'>
        <ResponsiveContainer>
        <PieChart >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            onMouseEnter={onPieEnter}
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
        <div className='piechart_details_item' key={`pieehart-details-${index}`}>
          <div className='piechart_color_icon' style={{backgroundColor:COLORS[index % COLORS.length]}}></div>
          <span className='name'>{thisData.name} - </span>
          <span className='value'>{thisData.value} Sales</span>
        </div>
        )})}
      </div>
    </div>
  )
}
