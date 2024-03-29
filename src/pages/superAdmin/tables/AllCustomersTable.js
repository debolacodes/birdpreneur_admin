import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import {Link} from 'react-router-dom'
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";
import EditCustomerDetails from "../../../modals/EditCustomerDetails"

export default function CustomersDataTable() {
    const {
        customersData,
        setShowModal,
        setModalData
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
  newVisibilities.map((thisVisibility, ind) => {
    index !== ind ? newVisibilities[ind] = false : newVisibilities[index] = !newVisibilities[index];
    return 0
  })
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
                <Link to={`/customers/${row.id}`}>
								  {row.name}
                </Link>
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
                          setModalData(
                            <EditCustomerDetails user={row}/>
                          );
                          setShowModal(true)
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

return (
<div>
    <Tables
    title="All Customers"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    source={customersData}
    setFilteredTableData={setFilteredTableData}
    ></Tables>
</div>
)
}
