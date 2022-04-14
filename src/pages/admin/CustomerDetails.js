import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import DetailsBox from '../../components/DetailsBox';
import Tables from '../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";

export default function CustomerDetails() {
  const [searchKey, setSearchKey] = useState("");

  const handleSearch = (query) => {
		setSearchKey(query);
	};

  const tableColumns = [
    {
      title: "Trans ID",
      dataIndex: "id",
    },
    {
      title: "Purchase",
      dataIndex: "purchase",
    },
    {
      title: "Purchase Value",
      dataIndex: "purchaseValue",
    },
    {
      title: "Rewards Value",
      dataIndex: "rewardsValue",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];
  const tableData = [
    {
      id: 43178,
      purchase: "DJI Mavic Pro 2",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 93455,
      purchase: "Coach Tabby",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Pending",
    },
    {
      id: 43178,
      purchase: "Heimer Miller Sofa",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Pending",
    },
    {
      id: 43178,
      purchase: "Brand New Bike",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      purchase: "Gaming Chair",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      purchase: "Coach Tabby",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      purchase: "Heimer Miller Sofa",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Pending",
    },
    {
      id: 43178,
      purchase: "Brand New Bike",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      purchase: "Gaming Chair",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      purchase: "Coach Tabby",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      purchase: "Heimer Miller Sofa",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Pending",
    },
    {
      id: 43178,
      purchase: "Brand New Bike",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
    {
      id: 43178,
      purchase: "Gaming Chair",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Failed",
    },
    {
      id: 43178,
      purchase: "Coach Tabby",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
      status: "Success",
    },
  ];
  let filteredTableData = tableData;
	if (searchKey) {
		filteredTableData = tableData?.filter((data) =>
			data.purchase.toLowerCase().includes(searchKey.toLocaleLowerCase())
		);
	}
  const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: row.id,
						purchase: (
							<div>
								{row.purchase}
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
							<div className={`status ${row.status === "Success"
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
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Customer Details"/>
            <div className="mainbar-container">
              <div className='row pt-5 border-bottom'>
                <DetailsBox title="Customer ID:" value="8845"/>
                <DetailsBox title="Customer Name:" value="Precious Ogar"/>
                <DetailsBox title="Email Address:" value="daniels_kunle78@hotmail.com"/>
                <DetailsBox title="Date Joined:" value="12/10/2018"/>
              </div>
              <div className='row'>
                <DetailsBox title="Last Visit:" value="22 Oct, 2020"/>
                <DetailsBox title="Number of Purchase:" value="196"/>
                <DetailsBox title="Rewards Gotten:" value="556"/>
              </div>

              <Tables
                title="All Transactions"
                columns={tableColumns}
                dataSource={dataSource}
                handleSearch={handleSearch}
                showPagination={true}
              />
            </div>
        </div>
    </div>
  )
}
