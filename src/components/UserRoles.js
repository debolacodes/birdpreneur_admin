import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../providers/MainProvider";
import Tables from './Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../utils";
import AddUser from '../modals/AddUser';
import EditUser from '../modals/EditUser';
import DeactivateUser from '../modals/DeactivateUser';

import {
  BsThreeDots,
} from "react-icons/bs";


export default function UserRoles(
  {
  setModalPage,
  setModalData,
  setShowModal,
  EDIT_USER_MODAL,
  DEACTIVATE_USER_MODAL,
}) {
    const {
        userRoles,
      } = useContext(mainFunctions)
  

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Store ID",
      dataIndex: "id",
      sort: false, 
    },
    {
      title: "User Name",
      dataIndex: "name",
      sort: false, 
    },
    {
      title: "Email Address",
      dataIndex: "email",
      sort: true, 
    },
    {
      title: "Role",
      dataIndex: "role",
      sort: false,
    },
    {
      title: "Store Allocated",
      dataIndex: "store",
      sort: false,
    },
    {
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
  
  const [filteredTableData, setFilteredTableData] = useState(userRoles);
  const [visibilities, setVisibilities] = React.useState(() =>
    filteredTableData.map((x) => false)
  );
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
                        name: (
							<div>
								{row.name}
							</div>
						),
						email: (
							<div>
								{row.email}
							</div>
						),
						manager: (
							<div>
								{row.manager}
							</div>
						),
						role: (
							<div>
								{row.role}
							</div>
						),
						store: (
							<div>
								{row.store}
							</div>
						),
            option:(
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
                             await setModalPage(EDIT_USER_MODAL)
                             await setModalData(<EditUser user={row} />);
                             setShowModal(true)
                          }}
                          style={{cursor: "pointer"}}
                          className="d-flex text-left py-3 border-bottom border-muted status-success hover:text-blue-dark text-small"
                        >
                          Edit User
                        </div>
                        <div
                          onClick={async () => {
                            await setModalPage(DEACTIVATE_USER_MODAL)
                            await setModalData(<DeactivateUser user={row} />);
                            setShowModal(true)
                          }}
                          style={{cursor: "pointer"}}
                          className="d-flex text-left py-3 status-failed hover:text-blue-dark text-small"
                        >
                          Deactivate User
                        </div>
                      </div>
                    ) : ""}
                  </div>
                </div>
            )
					};
			  })
			: [];
  
const handleClick = (index) => {
  const newVisibilities = [...visibilities];
  newVisibilities[index] = !newVisibilities[index];
  setVisibilities(newVisibilities);
};


return (
<div>
    <Tables
    title="User and Roles"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    source={userRoles}
    setFilteredTableData={setFilteredTableData}
    ></Tables>
</div>
)
}
