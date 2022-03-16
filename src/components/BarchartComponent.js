import React from 'react'

// import { chartColors as COLORS} from './colors';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export default function BarChartComponent(props) {
  return (
    <div className='bar-chart-wrapper'>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey={props.dataKey} stroke="#C76400" />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
