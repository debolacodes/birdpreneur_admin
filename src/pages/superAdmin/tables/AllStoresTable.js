import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";

import Tables from '../../../components/Tables';
import TabTitle from '../../../components/TabTitle';

import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";


export default function AllStoresTable() {
  const {
    storeList
  } = useContext(mainFunctions)


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
  
  const dataSource =
      filteredTableData &&
        filteredTableData.length > 0
          ? filteredTableData.map((row) => {
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
              if(typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true){
                console.log(thisStore[tableColumns[i].dataIndex])
                  if(thisStore[tableColumns[i].dataIndex].toString().toLowerCase().includes(searchKey)){
                      found = true
                      break
                  }else{
                      // eslint-disable-next-line no-unused-vars
                      found = false
                      continue
                  }
              }
          }
          console.log(found)
          return found;
      })
      setFilteredTableData(fd)
    },[searchKey, activeChartTab])




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
