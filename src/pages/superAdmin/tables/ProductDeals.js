import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency} from "../../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";
import EditDeal from "../../../modals/EditDeal"
import RemoveDeal from "../../../modals/RemoveDeal"

export default function ProductDeals() {
    const {
        productDeals,
        setModalPage,
        setModalData,
        setShowModal,
        EDIT_DEALS_MODAL,
        REMOVE_DEALS_MODAL
      } = useContext(mainFunctions)

  const [searchKey, setSearchKey] = useState("");

  const tableColumns = [
    {
      title: "Product ID",
      dataIndex: "id",
    },
    {
      title: "Product Name",
      dataIndex: "name",
    },
    {
      title: "Unit Price",
      dataIndex: "price",
    },
    {
      title: "Discount",
      dataIndex: "value",
      sort:false,
      search:false
    },
    {
      title: "",
      dataIndex: "option",
    },
  ];
 
  const handleSearch = (query) => {
		setSearchKey(query);
	};
  const handleStatusFilter = () => {

  }
  const handleDateFilter = () => {
    
  }
  
const [filteredTableData, setFilteredTableData] = useState(productDeals);

const [visibilities, setVisibilities] = React.useState(() =>
  filteredTableData.map((x) => false)
);

const handleClick = (index) => {
  const newVisibilities = [...visibilities];
  newVisibilities.map((thisVisibility, ind) => {
    index !== ind ? newVisibilities[ind] = false : newVisibilities[index] = !newVisibilities[index];
    return 0
  })
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
						name: (
							<div>
                <span style={{marginRight: "11px"}}>
                  <img src={require('../../../'+row.image)} 
                  style={{
                    width: "32px", 
                    height: "32px",
                    objectFit:"cover"
                    }} alt="img"/>
                </span>
								<span>{row.name}</span>
							</div>
						),
						price: (
							<div>
								₦{formatToCurrency(row.price, 1)}
							</div>
						),
						value: (
							<div>
                {row.type === "unit"
                ? <div>Get {row.value} free</div>
                : <div>{row.value}%</div>
                }
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
                          await setModalPage(EDIT_DEALS_MODAL);
                          await setModalData(
                            <EditDeal deal={row}/>
                          );
                          setShowModal(true)
                        }}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 border-bottom border-muted status-success hover:text-blue-dark text-small"
                      >
                        Edit Deal
                      </div>
                      <div
                        onClick={async () => {
                          await setModalPage(REMOVE_DEALS_MODAL);
                          await setModalData(
                            <RemoveDeal deal={row}/>
                          );
                          setShowModal(true)
                        }}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 status-failed hover:text-blue-dark text-small"
                      >
                        Remove Deal
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
    title="Product Deals"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    source={productDeals}
    setFilteredTableData={setFilteredTableData}
    ></Tables>
</div>
)
}
