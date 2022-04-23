import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";

import EditStore from "../../../modals/EditStore"
import DeactivateStore from '../../../modals/DeactivateStore';
import Tables from '../../../components/Tables';
import TabTitle from '../../../components/TabTitle';


import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";


export default function AllStoresTable() {
  const {
    storeList,
  setModalPage,
  setModalData,
  setShowModal,
  EDIT_STORE_SUPER_MODAL,
  DEACTIVATE_STORE_MODAL,
  } = useContext(mainFunctions)

  const [storeModal, setStoreModal] = useState("")
  const [currentStore, setCurrentStore] = useState(null)

  const ACTIVE_STORES_TAB = {id:"active", title:"Active Stores", data:storeList};
  const DEACTIVATED_STORES_TAB = {id:"deactivated", title:"Deactivated Stores", data:storeList};
  const [activeChartTab, setActiveChartTab ] = useState(ACTIVE_STORES_TAB);
  

  
  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "ID",
      dataIndex: "id",
      sort: true,
    },
    {
      title: "Store",
      dataIndex: "store",
      sort: true,
    },
    {
      title: "Store Location",
      dataIndex: "location",
      sort: true, 
    },
    {
      title: "Store Manager",
      dataIndex: "manager",
      sort: true,
    },
    {
      title: "Date Added",
      dataIndex: "dateAdded",
      sort: true,
    },{
      title:"",
      dataIndex:"option"
    }
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
  const [filteredTableData, setFilteredTableData] = useState(storeList);
  
  const [visibilities, setVisibilities] = useState(() =>
    filteredTableData.map((x) => false)
  );

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
              location: (
                <div>
                  {row.location}
                </div>
              ),
              manager: (
                <div>
                  {row.manager}
                </div>
              ),
              dateAdded: (
                <div>
                  {getDateTimeFormatUK(row.dateAdded)}
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
                          onClick={async () => {
                            setModalPage(EDIT_STORE_SUPER_MODAL);
                            setModalData(<EditStore store={row}/>);
                            setShowModal(true);
                          }}
                          style={{cursor: "pointer"}}
                          className="d-flex text-left py-3 border-bottom border-muted status-success hover:text-blue-dark text-small"
                        >
                          Edit Store
                        </div>
                        <div
                          onClick={() => {
                            setModalPage(EDIT_STORE_SUPER_MODAL);
                            setModalData(<DeactivateStore store={row}/>);
                            setShowModal(true);
                          }}
                          style={{cursor: "pointer"}}
                          className="d-flex text-left py-3 status-failed hover:text-blue-dark text-small"
                        >
                          Deactivate Store
                        </div>
                      </div>
                    ) : ""}
                  </div>
                </div>
              )
              
            };
          })
        : [];

  useEffect(() => {
      var fd = storeList.filter((thisStore, index) => {
          var found = true;
          

          for(var i = 0; i < tableColumns.length; i++){
              if((activeChartTab.id === "active" && !thisStore.active) ||
              (activeChartTab.id !== "active" && thisStore.active)
              ){
                  found = false
                  break;
              }
              if((typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true)
              && typeof thisStore[tableColumns[i].dataIndex] !== "undefined"
              ){
                  if(thisStore[tableColumns[i].dataIndex].toString().toLowerCase().includes(searchKey.toLocaleLowerCase())){
                      found = true
                      break
                  }else{
                      // eslint-disable-next-line no-unused-vars
                      found = false
                      continue
                  }
              }
          }
          return found;
      })
      setFilteredTableData(fd)
    },[searchKey, activeChartTab])

  useEffect(() => {
    if(storeModal && currentStore !== null){
    setModalPage(EDIT_STORE_SUPER_MODAL);
    if(storeModal ){
      if(storeModal === "edit"){
        setModalData(<EditStore store={currentStore}/>);
      }else if(storeModal === "deactivate"){
        setModalData(<DeactivateStore store={currentStore}/>);
      }
      setShowModal(true);
    }
  }
  //eslint-disable-next-line
  }, [storeModal]);

return (
<div>
   
    <Tables
    title={activeChartTab.title}
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    tabs={[ACTIVE_STORES_TAB, DEACTIVATED_STORES_TAB]} 
    activeTab={activeChartTab}
    setActiveTab={setActiveChartTab}
    ></Tables>
</div>
)
}
