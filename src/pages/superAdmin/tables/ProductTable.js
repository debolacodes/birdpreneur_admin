import React, {useState, useContext, useEffect} from 'react'
import {mainFunctions} from "../../../providers/MainProvider";
import Tables from '../../../components/Tables';
import { formatToCurrency, getDateTimeFormatUK } from "../../../utils";
import {
  BsThreeDots,
} from "react-icons/bs";
import EditProduct from '../../../modals/EditProduct';
import RemoveProduct from '../../../modals/RemoveProduct';

export default function ProductTable() {

const {
  productsData,
  setModalPage,
  setModalData,
  setShowModal,
  EDIT_PRODUCT_MODAL,
  REMOVE_PRODUCT_MODAL,
  
  
} = useContext(mainFunctions)

const [searchKey, setSearchKey] = useState("");

const [currentRow, setCurrentRow] = useState({});

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
    title: "No of Purchases",
    dataIndex: "purchases",
  },
  {
    title: "Date Uploaded",
    dataIndex: "date",
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
   
const [filteredTableData, setFilteredTableData] = useState(productsData);

const [visibilities, setVisibilities] = React.useState(() =>
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
						id: row.id,
						productName: (
							<div>
                <span style={{marginRight: "11px"}}>
                  <img src={row.image} style={{
                    width: "32px", 
                    height: "32px",
                    objectFit:"cover"
                    }} alt="img"/>
                </span>
								<span>{row.productName}</span>
							</div>
						),
						price: (
							<div>
								₦{formatToCurrency(row.price, 1)}
							</div>
						),
						purchases: (
							<div>
                {row.purchases}
							</div>
						),
						date: (
							<div>
								{getDateTimeFormatUK(row.date)}
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
                          setModalPage(EDIT_PRODUCT_MODAL);
                          setModalData(
                            <EditProduct product={row}/>
                          );
                          setShowModal(true)
                        }}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 border-bottom border-muted status-success hover:text-blue-dark text-small"
                      >
                        Edit Product
                      </div>
                      <div
                        onClick={() => {
                          setModalPage(REMOVE_PRODUCT_MODAL);
                          
                          setModalData(
                            <RemoveProduct product={row}/>
                          );
                          setShowModal(true)
                        }}
                        style={{cursor: "pointer"}}
                        className="d-flex text-left py-3 status-failed hover:text-blue-dark text-small"
                      >
                        Remove Product
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
        var fd = productsData.filter((thisStore, index) => {
            var found = true;
            for(var i = 0; i < tableColumns.length; i++){
                if((typeof tableColumns[i].search === "undefined" || tableColumns[i].search === true)
                && typeof thisStore[tableColumns[i].dataIndex] !== "undefined"
                ){
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
            return found;
        })
        setFilteredTableData(fd)
      },[searchKey])
return (
<div>
    <Tables
    title="All Products"
    dataSource={dataSource}
    columns={tableColumns}
    handleSearch={setSearchKey}
    showPagination={true}
    showPageSize={true}
    ></Tables>
</div>
)
}
