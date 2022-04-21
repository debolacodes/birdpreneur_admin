import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency} from "../../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";

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
    },
    {
      title: "",
      dataIndex: "option",
    },
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
const [filteredTableData, setFilteredTableData] = useState(productDeals);

const [visibilities, setVisibilities] = React.useState(() =>
  filteredTableData.map((x) => false)
);

const handleClick = (index) => {
  const newVisibilities = [...visibilities];
  newVisibilities[index] = !newVisibilities[index];
  setVisibilities(newVisibilities);
};

const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row, index) => {
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
						),
            option:(
              <div className="">
								<div className="position-relative">
									<div className="d-flex items-center" style={{cursor: "pointer"}}>
                    <BsThreeDots
									    onClick={() => handleClick(index)}
                      size={24}
                    />
									</div>
                  {visibilities[index] ? (
                    <div className="position-absolute border border-muted px-3 w-32 bg-white" style={{right: "0", top: "100%", zIndex: "2", width:  "150px"}}>
                      <div
                        onClick={() => {
                          // setEditStaff({
                          //   fullName : row.cashierName,
                          //   email: row.email,
                          // });
                          // setStaffModal(row);
                        }}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 border-bottom border-muted status-success hover:text-blue-dark text-small"
                      >
                        Edit Deal
                      </div>
                      <div
                        onClick={() => {}}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 status-failed hover:text-blue-dark text-small"
                      >
                        Remove Deal
                      </div>
                    </div>
                  ) : ""}
								</div>
              </div>
            )
					};
			  })
			: [];

useEffect(() => {
        var fd = productDeals.filter((thisStore, index) => {
            var found = true;
            for(var i = 0; i < tableColumns.length; i++){
                if((typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true)
                && typeof thisStore[tableColumns[i].dataIndex] !== "undefined"
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
