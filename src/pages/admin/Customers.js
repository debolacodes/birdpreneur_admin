import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Tables from '../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";
import PageFilters from '../../components/PageFilters';

export default function Customers() {
  const navigate = useNavigate();
  const goToCustomerDetails = (id) =>{
    navigate(`/customers/${id}`)
  }

	const [searchKey, setSearchKey] = useState("");
  
  const tableColumns = [
    {
      title: "Customer ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Total Purchases",
      dataIndex: "purchases",
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
      title: "Last Visit",
      dataIndex: "date",
    },
  ];
  const tableData = [
    {
      id: 43178,
      name: "Lola Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
    {
      id: 43178,
      name: "Joke Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
    {
      id: 43178,
      name: "Joke Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
    {
      id: 43178,
      name: "Joke Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
    {
      id: 43178,
      name: "Joke Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
    {
      id: 43178,
      name: "Joke Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
    {
      id: 43178,
      name: "Joke Ojo",
      email: "rennyoni@yahoo.com",
      purchases: "250",
      purchaseValue: 345000,
      rewardsValue: 345000,
      date: new Date(),
    },
  ];
  const handleSearch = (query) => {
		setSearchKey(query);
	};

  let [filteredTableData, setFilteredTableData] = useState(tableData);
  
  const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: row.id,
            name: (
							<div style={{cursor: "pointer"}} onClick={()=>goToCustomerDetails(row.id)}>
								{row.name}
							</div>
						),
            email: (
							<div>
								{row.email}
							</div>
						),
						purchases: (
							<div>
								{row.purchases}
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
					};
			  })
			: [];


  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar 
              title="Customers"
              button={{
                title: "DOWNLOAD REPORT",
              }}
              buttonAction={()=>{}}
            />
            <div className="full-mainbar-container">
              <PageFilters showStoreFilter={false} />
              <div className="wrapper pt-5">
                <SummaryBox title="Total No of Customers" value="2,403"/>
                <SummaryBox title="Active Customers/Day" value="2,400"/>
                <SummaryBox title="Active Customers Today" value="2,403"/>
              </div>

              <Tables
                title="All Customers"
                columns={tableColumns}
                dataSource={dataSource}
                handleSearch={handleSearch}
                showPagination={true}
                source={tableData}
                setFilteredTableData={setFilteredTableData}
              />
            </div>
        </div>
    </div>
  )
}
