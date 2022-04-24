import React, { useState, useContext, useEffect } from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import DetailsBox from '../../components/DetailsBox';
import {mainFunctions} from "../../providers/MainProvider";
import { formatToCurrency } from "../../utils";
import Title from '../../components/Title';


export default function TransactionDetails() {
  const {
    itemsPurchased
  } = useContext(mainFunctions)

  const [transactionTotal, setTransactionTotal] = useState(0)

  useEffect(()=>{
    var sum = 0
    for(var i = 0 ; i < itemsPurchased.length; i++){
      console.log(itemsPurchased[i].value)
      sum = sum + Number(itemsPurchased[i].value)
    }
    setTransactionTotal(sum)
  },[itemsPurchased])
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Transaction Details"
            small={true}
            />
            <div className="full-mainbar-container">
              <div className='row pt-5 border-bottom'>
                <DetailsBox title="Customer ID:" value="8845"/>
                <DetailsBox title="Customer Name:" value="Precious Ogar"/>
                <DetailsBox title="Email Address:" value="daniels_kunle78@hotmail.com"/>
                
              </div>
              <div className='row'>
                <DetailsBox title="Last Visit:" value="22 Oct, 2020" />
                <DetailsBox title="Mode of Payment" value="Online"/>
                <DetailsBox title="Transaction Status" value="Success"/>
                <DetailsBox title="Store of Purchase" value="KFC Egbeda"/>
              </div>

              <Title title="All Items Purchased"></Title>

              <div className='list_box'>
                {itemsPurchased.map((row, index)=>{
                  return(
                    <div className='list_item' key={index}>
                      <div className='title'>{row.title}</div>
                      <div className='value'>₦{formatToCurrency(row.value, 2)}</div>
                    </div>
                  )
                })}
                
              </div>
              <div className='list_box_total'>
                  <div className='title'>Total Purchase Value</div>
                  <div className='value'>₦{formatToCurrency(transactionTotal, 2)}</div>
              </div>
              
            </div>
        </div>
    </div>
  )
}
