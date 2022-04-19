import React from 'react'
import SummaryBox from "../../components/SummaryBox";
import Title from "../../components/Title";
import TopBar from "../../components/TopBar";
import BarChartComponent from '../../components/BarchartComponent';
import Sidebar from '../../components/Sidebar';
import Tables from '../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";

export default function Dashboard() {

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
      purchase: "DJI Mavic Pro 2",
      customerName: "Adunoluwa Adeyemi",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      purchase: "DJI Mavic Pro 2",
      customerName: "Adunoluwa Adeyemi",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Pending",
    },
    {
      id: 43178,
      purchase: "DJI Mavic Pro 2",
      customerName: "Adunoluwa Adeyemi",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    }
  ];
  const dataSource =
		tableData &&
      tableData.length > 0
        ? tableData.map((row) => {
					return {
						id: row.id,
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

  const SALES_CHART_TAB = {id:"sales", title:"Transaction Overview", data:SALES_DATA};
  return (
    <div className='body'>
      <Sidebar />
      <div className="mainbar">
        <TopBar 
          title="Dashboard"
          button={{
            title: "DOWNLOAD REPORT",
            action: () => {}
          }}
        />
        <div className="mainbar-container">
          <div className="page-filter justify-content-end">
            <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
          </div>
          <Title title="Overview"/>
          <div className="wrapper">
            <SummaryBox title="Total Stores" value="2,403"/>
            <SummaryBox title="Total Sales Made" value="500,000"/>
            <SummaryBox title="Overall Active Customers" value="2,403"/>
          </div>
          <Title title={SALES_CHART_TAB.title}/>
          <div className='col-12'>
            <BarChartComponent data={SALES_CHART_TAB.data} dataKey={SALES_CHART_TAB.id}/>
          </div>
          
          <Tables 
            title="Recent Transactions"
            columns={tableColumns}
            dataSource={dataSource}
          />
        </div>
      </div>
    </div>
  )
}
