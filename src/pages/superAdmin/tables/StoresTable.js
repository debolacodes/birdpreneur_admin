import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';

import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";

export default function StoresTable() {

const {
  stores
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
      title: "Location",
      dataIndex: "location",
      sort: true, 
    },
    {
      title: "Store Manager",
      dataIndex: "manager",
      sort: false,
    },
    {
      title: "Revenue Made",
      dataIndex: "revenue",
      sort: false,
    },
    {
      title: "Total Customers",
      dataIndex: "total_customers",
      sort: false,
      search:false
    }
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
  const [filteredTableData, setFilteredTableData] = useState(stores);

  
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
						location: (
							<div>
								{row.location}
							</div>
						),
						manager: (
							<div>
								{row.manager}
							</div>
						),
						revenue: (
							<div>
								₦{formatToCurrency(row.revenue, 1)}
							</div>
						),
						total_customers: (
							<div>
								{row.total_customers}
							</div>
						)
					};
			  })
			: [];


return (
<div>
    <Tables
    title="Stores"
    dataSource={dataSource}
    columns={tableColumns}
    source = {stores}
    handleSearch={setSearchKey}
    setFilteredTableData={setFilteredTableData}
    ></Tables>
</div>
)
}
