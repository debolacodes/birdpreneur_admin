import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";

export default function RevenueTable() {
    const {
        transactionData,

      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Store ID",
      dataIndex: "id",
      sort: false, 
      search: true
    },
    {
      title: "Store Name",
      dataIndex: "store",
      sort: false, 
      search:true
    },
    {
      title: "Purchase",
      dataIndex: "purchase",
      sort: false,
      search:true,
      
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      sort: false,
      search:true
    },
    {
      title: "Purchase Value",
      dataIndex: "purchaseTotal",
      sort: true,
      search:true
    },
    {
      title: "Rewards Value",
      dataIndex: "rewardsValue",
      sort: false,
      search:true
    },
    {
        title: "Date",
        dataIndex: "date",
        sort: false,
        search:false
    },
    {
        title: "Status",
        dataIndex: "status",
        sort: false,
        search:false
    },
  ];
 

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
            store: (
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
        var fd = transactionData.filter((thisStore, index) => {
            var found = true;
            for(var i = 0; i < tableColumns.length; i++){

                if((typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true)
                && typeof thisStore[tableColumns[i].dataIndex] !== "undefined" && searchKey !== ""
                ){
                  
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
  },[searchKey])




return (
<div>
    <Tables
    title="All Transactions"
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
