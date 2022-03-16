import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"


export default function MainProvider(props) {
    let navigate = useNavigate();
    // modal pages
    const ADD_STORE_SUPER_MODAL = "addstore";
    const ADD_STORE_ADMIN_MODAL = "addstore_admin"
    const ADD_NEW_USER_MODAL = "addnewuser"
    const ADD_PRODUCT_MODAL = "addproduct"
    const ADD_STAFF_MODAL = "addstaff"
    const ADD_STORE_MODAL = "addstore"
    const EDIT_CUSTOMER_MODAL = "editcustomer"
    const PRODUCT_DEAL_MODAL = "productdeal"
    const DATERANGE_MODAL = "daterange"
    const USE_PURCHASECODE_MODAL = "usepurchasecode"
    const PURCHASE_DETAILS_MODAL = "purchasedetails"

    const [showModal, setShowModal] = useState(false);
    const [modalPage, setModalPage] = useState("");
    const [modalData, setModalData] = useState({});

    const login = () =>{
        navigate("/dashboard")
    }
    const resetpassword = () =>{
        navigate("/dashboard")
    }
    const changepassword = () =>{
        navigate("/dashboard")
    }
    return (
        <mainFunctions.Provider
        value={{
            ADD_STORE_SUPER_MODAL,
            ADD_STORE_ADMIN_MODAL,
            ADD_NEW_USER_MODAL,
            ADD_PRODUCT_MODAL,
            ADD_STAFF_MODAL,
            ADD_STORE_MODAL,
            EDIT_CUSTOMER_MODAL,
            PRODUCT_DEAL_MODAL,
            DATERANGE_MODAL,
            USE_PURCHASECODE_MODAL,
            PURCHASE_DETAILS_MODAL,
            showModal, 
            setShowModal,
            modalPage, 
            setModalPage,
            modalData, 
            setModalData,
            login,
            resetpassword,
            changepassword
        }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()
