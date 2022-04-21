import React, { useState } from 'react'
import EmptyPurchases from '../../components/EmptyPurchases';
import Tables from '../../components/Tables';
import TopBar from '../../components/TopBar';
import { formatToCurrency, getDateTimeFormatUK } from "../../utils";

export default function Dashboard() {
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
      title: "",
      dataIndex: "action"
    }
  ];
  const tableData = [
    {
      id: 43178,
      productName: "DJI Mavic Pro 2",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Coach Tabby",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
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
            action: (
              <div 
                className='bg-success d-inline p-2 border rounded-circle cursor-pointer' 
                onClick={() =>{}}
              >
                <img src={"icons/shopping_bag.svg"} alt="img"/>
              </div>
            ),
					};
			  })
			: [];
  return (
    <div className='body'>
        {/* <Sidebar /> */}
        <div className="mainbar w-100">
            <TopBar 
              title="All Products"
              handleSearch={handleSearch}
              button={{
                title: "Use Customer Purchase Code",
                action: () => {}
              }}
            />
            <div className="d-flex flex-wrap h-100 w-100">
              <div className='col px-5'>
                <Tables 
                  columns={tableColumns}
                  dataSource={dataSource}
                  showPagination={true}
                />
              </div>
              <div className='col bg-light'>
                <EmptyPurchases />
                {/* <div className='purchases_wrapper p-5'>
                  <div className='d-flex justify-content-between'>
                    <div className='title'>Active Purchases</div>
                    <div 
                      className='text-success cursor-pointer sub_title'
                      onClick={() => {}}
                    >+ Add A Purchase</div>
                  </div>

                </div> */}
              </div>
            </div>
        </div>
    </div>
  )
}
