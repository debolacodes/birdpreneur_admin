import React, { useState, useContext, useEffect } from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import DetailsBox from '../../components/DetailsBox';
import Tables from '../../components/Tables';
import {mainFunctions} from "../../providers/MainProvider";
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";

export default function CustomerDetails() {
  const {
    customerTransaction
  } = useContext(mainFunctions)
  const [searchKey, setSearchKey] = useState("");
  
  const handleSearch = (query) => {
		setSearchKey(query);
	};

  const tableColumns = [
    {
      title: "Trans ID",
      dataIndex: "id",
    },
    {
      title: "Purchase",
      dataIndex: "purchase",
    },
    {
      title: "Purchase Value",
      dataIndex: "purchaseValue",
    },
    {
      title: "Rewards Value",
      dataIndex: "rewardsValue",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const [filteredTableData, setFilteredTableData] = useState(customerTransaction)

  useEffect(() => {
    var fd = customerTransaction.filter((row, index) => {
        var found = true;
        for(var i = 0; i < tableColumns.length; i++){
            if((typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true)
            && typeof row[tableColumns[i].dataIndex] !== "undefined"
            ){
                if(row[tableColumns[i].dataIndex].toString().toLowerCase().includes(searchKey.toLocaleLowerCase())){
                    found = true
                    break
                }else{
                    // eslint-disable-next-line no-unused-vars
                    found = false
                    continue
                }
            }
        
        }
        return found;
    })
    setFilteredTableData(fd)
},[searchKey])
  const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: row.id,
						purchase: (
							<div>
								{row.purchase}
							</div>
						),
						purchaseValue: (
							<div>
								₦{formatToCurrency(row.purchaseValue, 1)}
							</div>
						),
						rewardsValue: (
							<div>
								₦{formatToCurrency(row.rewardsValue, 1)}
							</div>
						),
						date: (
							<div>
								{getDateTimeFormatUK(row.date)}
							</div>
						),
						status: (
							<div className={`status-${row.status === "Success"
                ? "success"
                : row.status === "Pending"
                ? "pending"
                : "failed"
              }`}>
								{row.status }
							</div>
						),
					};
			  })
			: [];
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Customer Details"
            small={true}
            button={{
              title: "EDIT ACCOUNT"
            }}
            buttonAction={()=>{}}
            />
            <div className="full-mainbar-container">
              <div className='row pt-5 border-bottom'>
                <DetailsBox title="Customer ID:" value="8845"/>
                <DetailsBox title="Customer Name:" value="Precious Ogar"/>
                <DetailsBox title="Email Address:" value="daniels_kunle78@hotmail.com"/>
                <DetailsBox title="Date Joined:" value="12/10/2018"/>
              </div>
              <div className='row'>
                <DetailsBox title="Last Visit:" value="<p>22 Oct, 2020<br/>(2 months ago)</p>" />
                <DetailsBox title="Number of Purchase:" value="196"/>
                <DetailsBox title="Rewards Gotten:" value="556"/>
              </div>

              <Tables
                title="All Transactions"
                columns={tableColumns}
                dataSource={dataSource}
                handleSearch={handleSearch}
                showPagination={true}
              />
            </div>
        </div>
    </div>
  )
}
