import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";

export default function RevenueTable() {
    const {
        transactionData
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Store ID",
      dataIndex: "id",
      sort: false, 
    },
    {
      title: "Store Name",
      dataIndex: "name",
      sort: false, 
    },
    {
      title: "Purchase",
      dataIndex: "purchase",
      sort: false, 
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      sort: false,
    },
    {
      title: "Purchase Value",
      dataIndex: "purchaseTotal",
      sort: true,
    },
    {
      title: "Rewards Value",
      dataIndex: "rewardsValue",
      sort: false,
    },
    {
        title: "Date",
        dataIndex: "date",
        sort: false,
    },
    {
        title: "Status",
        dataIndex: "status",
        sort: false,
    },
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
const [filteredTableData, setFilteredTableData] = useState(transactionData);
const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: (
                            <div>
                                ID: {row.id}
                            </div>
                            ),
                        name: (
							<div>
								{row.store}
							</div>
						),
						purchase: (
							<div>
								{row.purchase}
							</div>
						),
						customerName: (
							<div>
								{row.customerName}
							</div>
						),
						purchaseTotal: (
							<div>
								-₦{formatToCurrency(row.purchaseValue, 1)}
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
							<div className={`status ${row.status === "Success"
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

useEffect(() => {
    console.log("adeb")
    if(searchKey){
        console.log("adeb")
        var fd = transactionData.filter((thisStore, index) => {
            var found = true;
            for(var i = 0; i < tableColumns.length; i++){
                if(typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true){
                  console.log(thisStore[tableColumns[i].dataIndex])
                    if(thisStore[tableColumns[i].dataIndex].toString().toLowerCase().includes(searchKey)){
                        found = true
                        break
                    }else{
                        // eslint-disable-next-line no-unused-vars
                        found = false
                        continue
                    }
                }
            
            }
            console.log(found)
            return found;
        })
        setFilteredTableData(fd)
    }
  },[searchKey])




return (
<div>
    <Tables
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    handleDateFilter={handleDateFilter}
    handleStatusFilter={handleStatusFilter}
    ></Tables>
</div>
)
}
