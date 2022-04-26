import React, { useContext, useEffect, useState } from 'react'
import ActivePurchases from '../../components/ActivePurchases';
import EmptyPurchases from '../../components/EmptyPurchases';
import Tables from '../../components/Tables';
import TopBar from '../../components/TopBar';
import UsePurchaseCodeModal from '../../modals/UsePurchaseCode';
import { formatToCurrency } from "../../utils";
import {mainFunctions} from "../../providers/MainProvider";
import ShoppingBag from "../../assets/icons/shopping_bag.svg";
import PurchaseDetailsModal from '../../modals/PurchaseDetails';

export default function Dashboard() {
  const {
    setShowModal,
    setModalPage,
    USE_PURCHASECODE_MODAL,
    PURCHASE_DETAILS_MODAL,
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
      search: true
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
  let [filteredTableData, setFilteredTableData] = useState([]);
	
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

  const addPurchaseItem = async (item) => {
    let temp = [...purchases];
    const index = temp.indexOf(activeTab);
    if(index > -1){
      temp[index].items.push({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.image,
        quantity: 1
      })
      setPurchases(temp);
      return;
    }
    const result = await addPurchase();
    let tempPurchases = [...result];
    setActiveTab(tempPurchases[0]);
    tempPurchases[0].items.push({
      id: item.id,
      productName: item.productName,
      price: item.price,
      image: item.image,
      quantity: 1
    })
    setPurchases(tempPurchases);
  }
  const addPurchase = () => {
    return new Promise(resolve => {
      let temp = [...purchases];
      let lastPurchase = temp.slice(-1).pop();
      if(temp.length<5){
        temp.push({
          id: lastPurchase ? lastPurchase.id + 1 : 1,
          items: []
        })
      }else{
        //show error here to delete a purchase first
      };
      setPurchases(temp);
      resolve(temp);
    });
  }
  const handleProceed = () => {
    setModalPage(PURCHASE_DETAILS_MODAL);
    setModalData(
      <PurchaseDetailsModal confirmPurchase={confirmPurchase} data={activeTab}/>
    );
    setShowModal(true);
    return;
  }
  const confirmPurchase = (data) => {
    let temp = [...purchases];
    const index = temp.indexOf(data);
    if (index > -1) 
      temp.splice(index, 1);
    setPurchases(temp);
    if(temp.length > 0){
      setActiveTab(temp[0]);
    }
    setShowModal(false);
  }
  const deletePurchase = (data) => {
    let temp = [...purchases];
    const index = temp.indexOf(data);
    if (index > -1) 
      temp.splice(index, 1);
    setPurchases(temp);
    if(temp.length > 0){
      setActiveTab(temp[0]);
    }
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
  const showUsePurchaseCodeModal = () => {
    setModalPage(USE_PURCHASECODE_MODAL);
    setModalData(
      <UsePurchaseCodeModal previewPurchase={previewPurchase}/>
    );
    setShowModal(true);
  }
  const previewPurchase = async () => {
    const result = await addPurchase();
    let lastPurchase = result.slice(-1).pop();
    setActiveTab(lastPurchase);
    setShowModal(false);
  }
  const increaseQty = (item) =>{
    let temp = [...purchases];
    const purchaseIndex = temp.indexOf(activeTab);
    const itemIndex = temp[purchaseIndex].items.indexOf(item);
    if(itemIndex > -1){
      temp[purchaseIndex].items[itemIndex].quantity++;
    }
    setPurchases(temp);
  }
  const decreaseQty = (item) =>{
    let temp = [...purchases];
    const purchaseIndex = temp.indexOf(activeTab);
    const itemIndex = temp[purchaseIndex].items.indexOf(item);
    if(itemIndex > -1){
      temp[purchaseIndex].items[itemIndex].quantity = temp[purchaseIndex].items[itemIndex].quantity - 1;
      if(temp[purchaseIndex].items[itemIndex].quantity <= 0){
        temp[purchaseIndex].items.splice(itemIndex, 1);
      }
    }
    setPurchases(temp);
  }
  useEffect(()=>{
    // const purchaseIndex = purchases.indexOf(activeTab);
    if(!activeTab && purchases.length > 0){
      setActiveTab(purchases[0])
    }
    if(!(purchases.length > 0)){
      setActiveTab("")
    }
		//eslint-disable-next-line
  },[purchases])
  return (
    <div className='w-100'>
        {/* <Sidebar /> */}
        <div className="cashier-main w-100">
            <TopBar 
              title="All Products"
              button={{
                title: "Use Customer Purchase Code"
              }}
              buttonAction={showUsePurchaseCodeModal}
            />
            <div className="row h-100 w-100">
              <div className='col px-5'>
                <Tables 
                  columns={tableColumns}
                  dataSource={dataSource}
                  showPagination={true}
                  handleSearch={true}
                  source={tableData}
                  setFilteredTableData={setFilteredTableData}
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
                      decreaseQty={decreaseQty}
                      increaseQty={increaseQty}
                    />
                  : <EmptyPurchases />
                }
              </div>
            </div>
        </div>
    </div>
  )
}
