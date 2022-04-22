import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";

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
    },
    {
      title: "",
      dataIndex:"option"
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
            option: (
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
                        Edit Details
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
        var fd = customersData.filter((thisStore, index) => {
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
