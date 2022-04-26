import React, { useState, useContext } from 'react'
import SummaryBox from "../../components/SummaryBox";
import Title from "../../components/Title";
import TopBar from "../../components/TopBar";
import BarChartComponent from '../../components/BarchartComponent';
import Sidebar from '../../components/Sidebar';
import Tables from '../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";
import {mainFunctions} from "../../providers/MainProvider";
import SelectDateRangeModal from '../../modals/SelectDateRange';
import PageFilters from '../../components/PageFilters';

export default function Revenue() {
  const {
    setShowModal,
    setModalPage,
    DATERANGE_MODAL,
    setModalData
  } = useContext(mainFunctions)

	const [searchKey, setSearchKey] = useState("");
	const [dateFilterFrom, setDateFilterFrom] = useState();
	const [dateFilterTo, setDateFilterTo] = useState();

  const SALES_DATA = [
    {
      name: 'Jan',
      sales: 4000,
    },
    {
      name: 'Feb',
      sales: 3000,
    },
    {
      name: 'Mar',
      sales: 2000,
    },
    {
      name: 'Apr',
      sales: 2780,
    },
    {
      name: 'May',
      sales: 1890,
    },
    {
      name: 'June',
      sales: 2390,
    },
    {
      name: 'July',
      sales: 3490,
    },
    {
      name: 'Aug',
      sales: 3000,
    },
    {
      name: 'Sept',
      sales: 2000,
    },
    {
      name: 'Oct',
      sales: 2780,
    },
    {
      name: 'Nov',
      sales: 2390,
    },
    {
      name: 'Dec',
      sales: 3490,
    },
  ];
  const tableColumns = [
    {
      title: "Trans ID",
      dataIndex: "id",
      sort: false,
    },
    {
      title: "Store Name",
      dataIndex: "storeName",
      sort: false,
    },
    {
      title: "Purchase",
      dataIndex: "purchase",
      sort: false,
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      sort: false,
    },
    {
      title: "Purchase Value",
      dataIndex: "purchaseValue",
      sort: false,
    },
    {
      title: "Rewards Value",
      dataIndex: "rewardsValue",
      sort: false,
    },
    {
      title: "Date",
      dataIndex: "date",
      sort: false,
    },
    {
      title: "Status",
      dataIndex: "status",
      sort: false,
    },
  ];
  const tableData = [
    {
      id: 43178,
      storeName: "Coach Tabby",
      purchase: "DJI Mavic Pro 2",
      customerName: "Adunoluwa Adeyemi",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      storeName: "John Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "John Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Pending",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      storeName: "Jane Doe",
      purchase: "DJI Mavic Pro 2",
      customerName: "Jane Doe",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    }
  ];
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const tableStatusOptions =  [
    {title: "All", value:""},
    {title: "Success", value:"success"},
    {title: "Pending", value:"pending"},
    {title: "Failed", value:"failed"}
  ]
  const [tableStatus, setTableStatus] = useState(tableStatusOptions[0]) 

  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    setModalPage(DATERANGE_MODAL);
    setModalData(
      <SelectDateRangeModal 
        getDateFilterFrom={(value) => setDateFilterFrom(value)}
        getDateFilterTo={(value) => setDateFilterTo(value)}
      />
    );
    setShowModal(true);
  }
  let [filteredTableData, setFilteredTableData] = useState([]);
	
  // if (dateFilterFrom && dateFilterTo){
  //   filteredTableData = filteredTableData?.filter((data) =>
  //     new Date(data.date).getTime() >= new Date(dateFilterFrom).getTime() && new Date(data.date).getTime() <= new Date(dateFilterTo).getTime()
	// 	);
  // }
  const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: row.id,
            storeName: (
							<div>
								{row.storeName}
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
					};
			  })
			: [];

  const SALES_CHART_TAB = {id:"sales", title:"Overall Overview", data:SALES_DATA};
  return (
    <div className='body'>
      <Sidebar />
      <div className="mainbar">
        <TopBar 
          title="Revenue" 
          button={{
            title: "DOWNLOAD REPORT"
          }}
          buttonAction={()=>{}}
        />
        <div className="full-mainbar-container">
          <PageFilters showStoreFilter={false} />
          <div className="wrapper pt-5">
            <SummaryBox title="Total Purchases" value="2,403"/>
            <SummaryBox title="Total Revenue Made" value="₦500,000"/>
          </div>
          <Title title={SALES_CHART_TAB.title}/>
          <div className='col-12'>
            <BarChartComponent data={SALES_CHART_TAB.data} dataKey={SALES_CHART_TAB.id}/>
          </div>
          
          <Tables 
            title="All Transactions"
            columns={tableColumns}
            dataSource={dataSource}
            source={tableData}
            setFilteredTableData={setFilteredTableData}
            handleSearch={handleSearch}
            showPagination={true}
            showPageSize={true}
            
            //Filters Props
            handleStatusFilter={()=>{}}
            handleDateFilter={handleDateFilter}
            tableStatusOptions={tableStatusOptions}
            tableStatus={tableStatus}
            setTableStatus={setTableStatus}

          />
        </div>
      </div>
    </div>
  )
}
