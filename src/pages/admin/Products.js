import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import Tables from '../../components/Tables';
import SummaryBox from '../../components/SummaryBox';
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";

export default function Products() {
	const [searchKey, setSearchKey] = useState("");

  const handleSearch = (query) => {
		setSearchKey(query);
	};

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
  const tableData = [
    {
      id: 43178,
      productName: "DJI Mavic Pro 2",
      price: 345000,
      purchases: 700,
      date: new Date(),
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Coach Tabby",
      price: 345000,
      purchases: 700,
      date: new Date(),
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      purchases: 700,
      date: new Date(),
      image: "icons/kfc.svg",
    },
  ];
  let filteredTableData = tableData;
	if (searchKey) {
		filteredTableData = tableData?.filter((data) =>
			data.productName.toLowerCase().includes(searchKey.toLocaleLowerCase())
		);
	}
  const dataSource =
    filteredTableData &&
      filteredTableData.length > 0
        ? filteredTableData.map((row) => {
					return {
						id: row.id,
						productName: (
							<div>
                <span style={{marginRight: "11px"}}>
                  <img src={row.image} style={{width: "32px", height: "32px"}} alt="img"/>
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
  return (
    <div className='body'>
        <Sidebar />
        <div className="mainbar">
            <TopBar title="Products"/>
            <div className="mainbar-container">
              <div className="page-filter justify-content-end">
                <div className="button"><div className="text">This Year</div><div className="icon down"></div></div>
              </div>
              <div className="wrapper">
                <SummaryBox title="Total Products" value="2,405" />
              </div>
              <div className='col-sm-12'>
                <Tables
                  title="All Products"
                  columns={tableColumns}
                  dataSource={dataSource}
                  handleSearch={handleSearch}
                  showPagination={true}
                />
              </div>
            </div>
        </div>
    </div>
  )
}
