import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency} from "../../../utils";

export default function ProductDeals() {
    const {
        productDeals
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Product ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Unit Price",
      dataIndex: "price",
    },
    {
      title: "Discount",
      dataIndex: "value",
      sort:false,
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
  
const [filteredTableData, setFilteredTableData] = useState(productDeals);

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
                <span style={{marginRight: "11px"}}>
                  <img src={row.image} style={{
                    width: "32px", 
                    height: "32px",
                    objectFit:"cover"
                    }} alt="img"/>
                </span>
								<span>{row.name}</span>
							</div>
						),
						price: (
							<div>
								₦{formatToCurrency(row.price, 1)}
							</div>
						),
						value: (
							<div>
                {row.type === "unit"
                ? <div>Get {row.value} free</div>
                : <div>{row.value}%</div>
                }
							</div>
						)
					};
			  })
			: [];

useEffect(() => {
        var fd = productDeals.filter((thisStore, index) => {
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
    
  },[searchKey])




return (
<div>
    <Tables
    title="Product Deals"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    ></Tables>
</div>
)
}
