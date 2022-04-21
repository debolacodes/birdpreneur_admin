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

// if (searchKey) {
//     filteredTableData = tableData?.filter((data) =>
//         data.customerName.toLowerCase().includes(searchKey.toLocaleLowerCase())
//     );
// }
  
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

useEffect(() => {
    console.log("adeb")
    if(searchKey){
        console.log("adeb")
        var fd = stores.filter((thisStore, index) => {
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
    title="My Stores"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    ></Tables>
</div>
)
}
