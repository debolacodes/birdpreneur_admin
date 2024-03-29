import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";
import {Link} from "react-router-dom"
import DateRange from '../../../modals/DateRange';
export default function RevenueTable() {
    const {
        transactionData,
        setModalData,
        setModalPage,
        setShowModal,
        DATE_FILTER_MODAL,
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const [startDateFilter, setStartDateFilter] = useState("")
  const [endDateFilter, setEndDateFilter] = useState("")
  const tableStatusOptions =  [
    {title: "All", value:""},
    {title: "Success", value:"success"},
    {title: "Pending", value:"pending"},
    {title: "Failed", value:"failed"}
  ]
  const [tableStatus, setTableStatus] = useState(tableStatusOptions[0]) 

  const tableColumns = [
    {
      title: "Store ID",
      dataIndex: "id",
      sort: false, 
      search: false
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
      search: false
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
    {
      title: "",
      dataIndex:"details",
      search:false
    }
  ];
 

  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    setModalPage(DATE_FILTER_MODAL);
                          
    setModalData(
      <DateRange 
      setStartDateFilter={setStartDateFilter}
      setEndDateFilter={setEndDateFilter}
      />
    );
    setShowModal(true)
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
                <div className={`status-${row.status === "Success"
                                  ? "success"
                                  : row.status === "Pending"
                                  ? "pending"
                                  : "failed"
                              }`}>
                  {row.status }
                </div>
            ),
            details:(
              <div className="table_btn">
                <Link to={`/transaction/${row.id}`}>Details</Link>
              </div>
            )
					};
			  })
			: [];  


return (
<div>
    <Tables
    title="All Transactions"
    //base props
    columns={tableColumns}
    dataSource={dataSource}
    source={transactionData}
    setFilteredTableData={setFilteredTableData}
    //Filters Props
    handleStatusFilter={handleStatusFilter}
    handleDateFilter={handleDateFilter}
    tableStatusOptions={tableStatusOptions}
    tableStatus={tableStatus}
    setTableStatus={setTableStatus}
    //search prop
    handleSearch={setSearchKey}
    // pagination props
    showPagination={true}
    showPageSize={true}
    //active Tabs
    // tabs={[ACTIVE_STORES_TAB, DEACTIVATED_STORES_TAB]} 
    // activeTab={activeChartTab}
    // setActiveTab={setActiveChartTab}
    
    
    ></Tables>
</div>
)
}
