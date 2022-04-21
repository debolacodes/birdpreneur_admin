import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";

export default function CustomersDataTable() {
    const {
        customersData
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      sort: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      sort: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      sort: true, 
    },
    {
      title: "Total Purchase",
      dataIndex: "totalPurchase",
      sort: true,
    },
    {
      title: "Purchase Value",
      dataIndex: "purchaseValue",
      sort: true,
    },
    {
      title: "Rewards Value",
      dataIndex: "rewardsValue",
      sort: true,
    },
    {
      title: "Last Visit",
      dataIndex: "lastVisit",
      sort: true,
    }
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
const [filteredTableData, setFilteredTableData] = useState(customersData);
  
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
								{row.name}
							</div>
						),
						email: (
							<div>
								{row.email}
							</div>
						),
						totalPurchase: (
							<div>
								{row.totalPurchase}
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
						lastVisit: (
							<div>
								{getDateTimeFormatUK(row.lastVisit)}
							</div>
						),
						
					};
			  })
			: [];

useEffect(() => {
        var fd = customersData.filter((thisStore, index) => {
            var found = true;
            for(var i = 0; i < tableColumns.length; i++){
                if((typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true)
                && typeof thisStore[tableColumns[i].dataIndex] !== "undefined"
                ){
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
  },[searchKey])




return (
<div>
    <Tables
    title="All Customers"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    ></Tables>
</div>
)
}
