import React, { useContext, useEffect, useState } from 'react'
import ActivePurchases from '../../components/ActivePurchases';
import EmptyPurchases from '../../components/EmptyPurchases';
import Tables from '../../components/Tables';
import TopBar from '../../components/TopBar';
import UsePurchaseCodeModal from '../../modals/UsePurchaseCode';
import { formatToCurrency } from "../../utils";
import {mainFunctions} from "../../providers/MainProvider";
import ShoppingBag from "../../assets/icons/shopping_bag.svg";

export default function Dashboard() {
  const {
    setShowModal,
    setModalPage,
    USE_PURCHASECODE_MODAL,
    setModalData
  } = useContext(mainFunctions)
	const [searchKey, setSearchKey] = useState("");
  const [purchases, setPurchases] = useState([]);
  const [activeTab, setActiveTab] = useState("");

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
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Coach Tabby",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
    },
    {
      id: 43178,
      productName: "Heimer Miller Sofa",
      price: 345000,
      image: "assets/icons/kfc.svg",
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
                  <img src={require("../../"+row.image)} style={{width: "32px", height: "32px"}} alt="img"/>
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
                onClick={() =>addPurchaseItem(row)}
              >
                <img src={ShoppingBag} alt="img"/>
              </div>
            ),
					};
			  })
			: [];

  const addPurchaseItem = (item) => {
    let temp = [...purchases];
    const index = temp.indexOf(activeTab);
    if(index > -1){
      temp[index].items.push({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.image,
      })
      setPurchases(temp);
      return;
    }else{
      addPurchase();
      addPurchaseItem(item);
    };
  }
  
  const addPurchase = () => {
    let temp = [...purchases];
    if(temp.length<5){
      temp.push({
        id: temp.length + 1,
        items: []
      })
    }else{
      //show error here to delete a purchase first
    };
    setPurchases(temp);
  }
  const handleProceed = () => {

  }
  const deletePurchase = (data) => {
    let temp = [...purchases];
    const index = temp.indexOf(data);
    if (index > -1) 
      temp.splice(index, 1);
    setPurchases(temp);
    if(purchases.length > 0)
      setActiveTab(purchases[0]);
  }
  const deletePurchaseItem = (item) => {
    let temp = [...purchases];
    const purchaseIndex = temp.indexOf(activeTab);
    const itemIndex = temp[purchaseIndex].items.indexOf(item);
    if(itemIndex > -1){
      temp[purchaseIndex].items.splice(itemIndex, 1);
    }
    setPurchases(temp);
  }
  useEffect(()=>{
    const purchaseIndex = purchases.indexOf(activeTab);
    if(!activeTab && purchases.length > 0){
      setActiveTab(purchases[0])
    }
    if(!(purchaseIndex > -1) && purchases.length > 0){
      setActiveTab(purchases[0])
    }
    if(!(purchases.length > 0)){
      setActiveTab("")
    }
		//eslint-disable-next-line
  },[purchases])
  
  const showUsePurchaseCodeModal = () => {
    setModalPage(USE_PURCHASECODE_MODAL);
    setModalData(
      <UsePurchaseCodeModal previewPurchase={previewPurchase}/>
    );
    setShowModal(true);
    return;
  }
  const previewPurchase =() => {
    
  }
  return (
    <div className='w-100'>
        {/* <Sidebar /> */}
        <div className="cashier-main w-100">
            <TopBar 
              title="All Products"
              handleSearch={handleSearch}
              button={{
                title: "Use Customer Purchase Code"
              }}
              buttonAction={showUsePurchaseCodeModal}
            />
            <div className="d-flex flex-wrap justify-content-center h-100 w-100">
              <div className='col px-5'>
                <Tables 
                  columns={tableColumns}
                  dataSource={dataSource}
                  showPagination={true}
                />
              </div>
              <div className='col bg-light'>
                
                {purchases.length > 0 
                  ? <ActivePurchases
                      purchases={purchases}
                      addPurchase={addPurchase}
                      handleProceed={handleProceed}
                      deletePurchase={deletePurchase}
                      activeTab={activeTab}
                      setActiveTab={setActiveTab}
                      deletePurchaseItem={deletePurchaseItem}
                    />
                  : <EmptyPurchases />
                }
              </div>
            </div>
        </div>
    </div>
  )
}
