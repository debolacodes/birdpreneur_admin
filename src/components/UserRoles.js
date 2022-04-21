import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../providers/MainProvider";
import Tables from './Tables';


import { formatToCurrency, getDateTimeFormatUK } from "../utils";

export default function UserRoles() {
    const {
        userRoles
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Store ID",
      dataIndex: "id",
      sort: false, 
    },
    {
      title: "User Name",
      dataIndex: "name",
      sort: false, 
    },
    {
      title: "Email Address",
      dataIndex: "email",
      sort: true, 
    },
    {
      title: "Role",
      dataIndex: "role",
      sort: false,
    },
    {
      title: "Store Allocated",
      dataIndex: "store",
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
  
  const [filteredTableData, setFilteredTableData] = useState(userRoles);

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
						manager: (
							<div>
								{row.manager}
							</div>
						),
						role: (
							<div>
								{row.role}
							</div>
						),
						store: (
							<div>
								{row.store}
							</div>
						)
					};
			  })
			: [];

useEffect(() => {
    console.log("adeb")
    if(searchKey){
        console.log("adeb")
        var fd = userRoles.filter((thisStore, index) => {
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
    title="User and Roles"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    ></Tables>
</div>
)
}
