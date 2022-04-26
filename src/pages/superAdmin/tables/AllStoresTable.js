import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";

import EditStore from "../../../modals/EditStore"
import DeactivateStore from '../../../modals/DeactivateStore';
import Tables from '../../../components/Tables';


import { getDateTimeFormatUK } from "../../../utils";
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
  } = useContext(mainFunctions)



  const ACTIVE_STORES_TAB = {id:"active", title:"Active Stores", data:storeList};
  const DEACTIVATED_STORES_TAB = {id:"deactivated", title:"Deactivated Stores", data:storeList};
  const [activeChartTab, setActiveChartTab ] = useState(ACTIVE_STORES_TAB);
  

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
 
  const handleSearch = (query) => {};
  
  
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



return (
<div>
   
    <Tables
    title={activeChartTab.title}
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={handleSearch}
    showPagination={true}
    showPageSize={true}
    tabs={[ACTIVE_STORES_TAB, DEACTIVATED_STORES_TAB]} 
    activeTab={activeChartTab}
    setActiveTab={setActiveChartTab}
    source={storeList}
    setFilteredTableData={setFilteredTableData}
    ></Tables>
</div>
)
}
