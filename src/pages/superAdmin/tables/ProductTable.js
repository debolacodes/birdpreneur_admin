import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";

export default function ProductTable() {
    const {
        productsData
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Product ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
    },
    {
      title: "Unit Price",
      dataIndex: "price",
    },
    {
      title: "No of Purchases",
      dataIndex: "purchases",
    },
    {
      title: "Date Uploaded",
      dataIndex: "date",
    },
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
const [filteredTableData, setFilteredTableData] = useState(productsData);

const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: row.id,
						productName: (
							<div>
                <span style={{marginRight: "11px"}}>
                  <img src={row.image} style={{
                    width: "32px", 
                    height: "32px",
                    objectFit:"cover"
                    }} alt="img"/>
                </span>
								<span>{row.productName}</span>
							</div>
						),
						price: (
							<div>
								₦{formatToCurrency(row.price, 1)}
							</div>
						),
						purchases: (
							<div>
                {row.purchases}
							</div>
						),
						date: (
							<div>
								{getDateTimeFormatUK(row.date)}
							</div>
						),
					};
			  })
			: [];

useEffect(() => {
    
    if(searchKey){
        
        var fd = productsData.filter((thisStore, index) => {
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
    ></Tables>
</div>
)
}
