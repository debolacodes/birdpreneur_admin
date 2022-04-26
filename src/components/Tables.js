import React, { useEffect, useState, useContext } from "react";
import Title from './Title';
import {ReactComponent as TableSort} from '../assets/icons/table_sort.svg';
import { isElement } from "../utils";
import Pagination from "./Pagination";
import { testTableColumns, testTableDataSource } from "./enum";
import {mainFunctions} from "../providers/MainProvider";
import SelectDateRangeModal from '../modals/SelectDateRange';

import TabTitle from "./TabTitle";
export default function Tables({
  title,
  handleSearch,
  handleDateFilter,
  handleStatusFilter,
  columns=testTableColumns,
	dataSource=testTableDataSource,
	pageSize = 10,
	showPagination = false,
	totalPages,
	setCurrentPage,
  tabs = null,
  activeTab=null,
  setActiveTab,
  tableStatusOptions,
  tableStatus,
  setTableStatus,
  setFilteredTableData,
  source
}) {
  const {
    setShowModal,
    setModalPage,
    DATERANGE_MODAL,
    setModalData
  } = useContext(mainFunctions)
  const [toggleStatusOptions, setToggleStatusOptions] = useState(false)
	const [_columns, _setColumns] = useState([]);
	const [_dataSource, _setDataSource] = useState([]);
	const [pages, setPages] = useState(0);
	const [activeIndex, setActiveIndex] = useState(1);
	const [canExpand, setCanExpand] = useState(false);
  const [searchKey, setSearchKey] = useState("");
	const [dateFilterFrom, setDateFilterFrom] = useState(null);
	const [dateFilterTo, setDateFilterTo] = useState(null);

  useEffect(() => {
		const _columns = columns.map((column) => {
			return {
				...column,
				sortState: "ASC",
			};
		});
		_setColumns(_columns);
		_setDataSource(
			dataSource.slice(
				(activeIndex - 1) * pageSize,
				activeIndex * pageSize < dataSource.length
					? activeIndex * pageSize
					: (activeIndex - 1) * pageSize +
							(dataSource.length - (activeIndex - 1) * pageSize)
			)
		);
		totalPages
			? setPages(totalPages)
			: setPages(Math.ceil(dataSource.length / pageSize));
		setCurrentPage && setCurrentPage(activeIndex);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeIndex, columns, dataSource, pageSize]);

  const handleSort = (column) => {
		if (column.sortState === "DEC") {
			_setDataSource(
				_dataSource.sort((a, b) =>
					a[column.dataIndex].toString() > b[column.dataIndex].toString()
						? 1
						: -1
				)
			);
			const _cs = _columns.map((c) => {
				return {
					...c,
					sortState:
						c.dataIndex === column.dataIndex ? "ASC" : c.sortState,
				};
			});
			_setColumns(_cs);
		} else {
			_setDataSource(
				_dataSource.sort((a, b) =>
					a[column.dataIndex].toString() < b[column.dataIndex].toString()
						? 1
						: -1
				)
			);
			const _cs = _columns.map((c) => {
				return {
					...c,
					sortState:
						c.dataIndex === column.dataIndex ? "DEC" : c.sortState,
				};
			});
			_setColumns(_cs);
		}
	};

  useEffect(() => {
    if(source && setFilteredTableData){
    var fd = source.filter((row, index) => {
        var found = true;
        for(var i = 0; i < columns.length; i++){
          if(activeTab && row.active){
            console.log("here1")
          if((activeTab.id === "active" && !row.active) ||
              (activeTab.id !== "active" && row.active)
              ){
                  found = false
                  continue;
              }
          }
          if(typeof row[columns[i].dataIndex] !== "undefined"){
            if((typeof columns[i].search === "undefined" || columns[i].search === true)){
                if(row[columns[i].dataIndex].toString().toLowerCase().includes(searchKey.toLowerCase())){
                    found = true
                    break;
                }else{
                    // eslint-disable-next-line no-unused-vars
                    found = false
                    continue
                }
            }
          }
        }
        if(tableStatus && setTableStatus && tableStatusOptions){
        if(tableStatus.value !== ""){
          if(row.status.toString().toLowerCase() !== tableStatus.value.toLowerCase()){
            found = false
          }
        }
        if (dateFilterFrom && dateFilterTo){
          if(!(new Date(row.date).getTime() >= new Date(dateFilterFrom).getTime() && new Date(row.date).getTime() <= new Date(dateFilterTo).getTime())){
            found = false
          }
        }
      }

        return found;
    })
    setFilteredTableData(fd)
  }
  //eslint-disable-next-line
  },[searchKey, tableStatus, activeTab, dateFilterFrom, dateFilterTo])

  const openDateFilter = () => {
    setModalPage(DATERANGE_MODAL);
    setModalData(
      <SelectDateRangeModal 
        getDateFilterFrom={(value) => setDateFilterFrom(value)}
        getDateFilterTo={(value) => setDateFilterTo(value)}
      />
    );
    setShowModal(true);
  }

  return (
    <>
      <div style={{overflowX: "auto", marginTop: "1rem"}}>
        <div className='d-flex justify-content-between'>
          <div className="table-title">
            {tabs === null 
            ? (title && <Title title={title}></Title>)
            : <TabTitle pages={tabs} 
            active={activeTab} 
            setActive={setActiveTab} />
            }
          </div>
          <div className='table-filters'>
            {handleDateFilter && (
              <div className="table-date-filter" onClick={openDateFilter}>
                <span className="icon"></span>
                <span>Filter Date</span>
              </div>
            )}
            {handleStatusFilter && tableStatus && (
              <div className="table-status-filter">
                <div className="button"
                onClick={()=>setToggleStatusOptions(!toggleStatusOptions)}
                >
                  <div className="text">{tableStatus.title}</div>
                  <div className="icon down"></div>
                </div>
                {toggleStatusOptions && tableStatusOptions &&
                  <div className='page-filter-options'>
                    {tableStatusOptions.map((status, index)=>{
                    return(
                      <div key={index}
                      className={`page-filter-option ${status.value === tableStatus.value ? "active": ""}`}
                      onClick = {()=>setTableStatus(status)}
                      >{status.title}</div>
                    )})}
                  </div>
                }
              </div>
            )}
            {handleSearch && (
              <div className='search_wrapper'>
                <div className='icon search'></div>
                <input 
                  className='search_input' 
                  placeholder='Search...' 
                  type="text"
                  onChange={(e) =>{
                    setSearchKey(e.currentTarget.value)
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div className='table mt-2'>
          <table>
            <thead>
              <tr>
                {_columns && _columns.length > 0 ? (
                  _columns.map((column) => (
                    <td
                      key={column.dataIndex}
                    >
                      <div 
                        onClick={() => column.sort && handleSort(column)}
                        className={"d-flex align-items-center"}
                      >
                        {column.title}  
                        {column.title && column.sort && (
                          <span className={"ml-2"}>
                            <TableSort />
                          </span>
                        )}
                      </div>
                    </td>
                  ))
                ) : (
                  <></>
                )}
              </tr>
            </thead>
            <tbody>
              {_dataSource && _dataSource.length > 0 ? (
                _dataSource.map((data, key) => (
                  <tr data-testid="rg-table-body-tr" key={key}>
                    {_columns && _columns.length > 0 ? (
                      _columns.map((column, index) => {
                        return isElement(data[column.dataIndex]) ? (
                          <td
                            key={index}
                          >
                            {data[column.dataIndex]}
                          </td>
                        ) : (
                          <td
                            key={index}
                          >
                            <div>
                              {data[column.dataIndex]}
                            </div>
                          </td>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </tr>
                ))
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
        </div>
      {showPagination && (
        <Pagination
          pages={pages}
          rowsLength={dataSource.length}
          _setActiveIndex={(index) => setActiveIndex(index)}
          expand={canExpand}
          handleExpand={(bool) => setCanExpand(bool)}
        />
      )}
    </>
  )
}
