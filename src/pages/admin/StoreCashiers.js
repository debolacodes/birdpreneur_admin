import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import SummaryBox from '../../components/SummaryBox';
import Tables from '../../components/Tables';
import { getDate } from "../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";

export default function Stores() {
	const [searchKey, setSearchKey] = useState("");

  const handleSearch = (query) => {
		setSearchKey(query);
	};

  const tableColumns = [
    {
      title: "Cashier ID",
      dataIndex: "id",
    },
    {
      title: "Cashier Name",
      dataIndex: "cashierName",
    },
    {
      title: "Email Address",
      dataIndex: "email",
    },
    {
      title: "Start Date",
      dataIndex: "date",
    },
    {
      title: "",
      dataIndex: "option",
    },
  ];
  const tableData = [
    {
      id: 43178,
      cashierName: "Farouk Ogunleyei",
      email: "mo.yusuf@gmail.com",
      date: new Date(),
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      cashierName: "Demilade Agboola",
      email: "usman.yak@mail.com",
      date: new Date(),
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      cashierName: "Oluchi Uzo",
      email: "daniels_kunle78@hotmail.com",
      date: new Date(),
      image: "icons/kfc.svg",
    }
  ];
  let filteredTableData = tableData;
	if (searchKey) {
		filteredTableData = tableData?.filter((data) =>
			data.cashierName.toLowerCase().includes(searchKey.toLocaleLowerCase())
		);
	}
  const [visibilities, setVisibilities] = React.useState(() =>
    filteredTableData.map((x) => false)
	);
  console.log(visibilities)

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
						id: row.id,
						cashierName: (
							<div>
                <span style={{marginRight: "11px"}}>
                  <img src={row.image} style={{width: "32px", height: "32px"}} alt="img"/>
                </span>
								<span>{row.cashierName}</span>
							</div>
						),
						email: (
							<div>
								{row.email}
							</div>
						),
						date: (
							<div>
								{getDate(row.date)}
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
                        onClick={() => {}}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 border-bottom border-muted status-success hover:text-blue-dark text-small"
                      >
                        Edit Staff
                      </div>
                      <div
                        onClick={() => {}}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 status-failed hover:text-blue-dark text-small"
                      >
                        Remove Staff
                      </div>
                    </div>
                  ) : ""}
								</div>
              </div>
						),
					};
			  })
			: [];
  return (
    <div className='body'>
      <Sidebar />
      <div className="mainbar">
        <TopBar title="Store Cashier"/>
        <div className="mainbar-container">
            <div className='btn_ btn_green mb-3'>ADD A CASHIER</div>
          <div className="wrapper">
            <SummaryBox title="No of Staff" value="25"/>
          </div>

          <Tables 
            title="All Cashiers"
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
