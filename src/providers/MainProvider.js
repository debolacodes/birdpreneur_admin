import React, {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { roleAsync } from "../redux/actions";


export default function MainProvider(props) {
	const dispatch = useDispatch();
    
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

    const [showSidebar, setShowSidebar] = useState(false)

    const [showModal, setShowModal] = useState(false);
    const [modalPage, setModalPage] = useState("");
    const [modalData, setModalData] = useState({});

    const login = (userData) =>{
        if(userData.email === "admin@izifin.com"){
            dispatch(roleAsync("admin"));
        }else if(userData.email === "superadmin@izifin.com"){
            dispatch(roleAsync("superadmin"));
        }else{
            dispatch(roleAsync("cashier"));
        }
        navigate("/dashboard")
    }
    
    const resetpassword = () =>{
        navigate("/dashboard")
    }
    const changepassword = () =>{
        navigate("/dashboard")
    }


    // Super Admin Dashboard
    const totalStoresOverview = {
        title:"Total Stores",
        value:"243"
    }
    const totalSalesOverview = {
        title:"Total Sales Made",
        value:"500000"
    }
    const activeCustomersOverview = {
        title:"Overall Active Customers",
        value:"3000"
    }
    const top5Sales =  [
        { name: 'KFC Wuse', value: 780 },
        { name: 'KFC Egbeda', value: 740 },
        { name: 'KFC VI 2', value: 700 },
        { name: 'KFC VI', value: 600 },
        { name: 'KFC Banana Island', value: 523 },
    ];
    const top5SalesPeriod =  [
      { name: 'January', value: 1080 },
      { name: 'November', value: 910 },
      { name: 'March', value: 880 },
      { name: 'June', value: 810 },
      { name: 'August', value: 723 },
    ];
    const salesData = [
      {
        name: 'Jan',
        sales: 4000,
      },
      {
        name: 'Feb',
        sales: 3000,
      },
      {
        name: 'Mar',
        sales: 2000,
      },
      {
        name: 'Apr',
        sales: 2780,
      },
      {
        name: 'May',
        sales: 1890,
      },
      {
        name: 'June',
        sales: 2390,
      },
      {
        name: 'July',
        sales: 3490,
      },
      {
        name: 'Aug',
        sales: 3000,
      },
      {
        name: 'Sept',
        sales: 2000,
      },
      {
        name: 'Oct',
        sales: 2780,
      },
      {
        name: 'Nov',
        sales: 2390,
      },
      {
        name: 'Dec',
        sales: 3490,
      },
    ];
    const visitsData = [
      {
        name: 'Jan',
        visits: 600,
      },
      {
        name: 'Feb',
        visits: 400,
      },
      {
        name: 'Mar',
        visits: 8000,
      },
      {
        name: 'Apr',
        visits: 200,
      },
      {
        name: 'May',
        visits: 1890,
        
      },
      {
        name: 'June',
        visits: 2390,
      },
      {
        name: 'July',
        visits: 3490,
      },
      {
        name: 'Aug',
        visits: 3000,
      },
      {
        name: 'Sept',
        visits: 2000,
      },
      {
        name: 'Oct',
        visits: 2780,
      },
      {
        name: 'Nov',
        visits: 290,
      },
      {
        name: 'Dec',
        visits: 490,
      },
    ];
    const stores = [
      {
        id: "43177",
        name: "KFC Wuse",
        location: "10 ijaoye street jibowu, Lagos State",
        manager: "Morenike Oni",
        revenue: "345000",
        total_customers:5
      },
      {
        id: "43179",
        name: "KFC Egbeda",
        location: "4 joseph ali street, ikoyi, Lagos State.",
        manager: "Basirat Salihu",
        revenue: "345000",
        total_customers:10
      }

    ]
      

    //   Revenue SuperAdmin
    const totalPurchasesOverview = {
        title:"Total Purchases",
        value:"2403"
    }
    const totalRevenueMadeOverview = {
        title:"Total Revenue Made",
        value:"500000"
    }

    const revenueData = [
        {
          name: 'Jan',
          Revenue: 4000,
        },
        {
          name: 'Feb',
          Revenue: 3000,
        },
        {
          name: 'Mar',
          Revenue: 2000,
        },
        {
          name: 'Apr',
          Revenue: 2780,
        },
        {
          name: 'May',
          Revenue: 1890,
        },
        {
          name: 'June',
          Revenue: 2390,
        },
        {
          name: 'July',
          Revenue: 3490,
        },
        {
          name: 'Aug',
          Revenue: 3000,
        },
        {
          name: 'Sept',
          Revenue: 2000,
        },
        {
          name: 'Oct',
          Revenue: 2780,
        },
        {
          name: 'Nov',
          Revenue: 2390,
        },
        {
          name: 'Dec',
          Revenue: 3490,
        },
    ];

    //  Product SuperAdmin
    const totalProductsOverview = {
        title:"Total Products",
        value:"2405"
    }

    //Revenue SuperAdmin
    const transactionData = [
      {
        id: 43178,
        store: "KFC Wuse",
        username: "Coach Tabby",
        purchase: "DJI Mavic Pro 2",
        customerName: "Adunoluwa Adeyemi",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Success",
      },
      {
        id: 43178,
        username: "John Doe",
        store: "KFC Egbeda",
        purchase: "DJI Mavic Pro 2",
        customerName: "John Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Pending",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC VI",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC VI 2",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Banana Island",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Banana Island",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Wuse",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Egbeda",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Banana Island",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Egbeda",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Wuse",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Wuse",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Banana Island",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC Wuse",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC VI",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43178,
        username: "Jane Doe",
        store: "KFC VI 2",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      }
    ];

    //Products SuperAdmin
    const productsData = [
      {
        id: 43178,
        productName: "DJI Mavic Pro 2",
        price: 345000,
        purchases: 700,
        date: new Date(),
        image: "icons/avatar1.png",
      },
      {
        id: 43178,
        productName: "Coach Tabby",
        price: 345000,
        purchases: 700,
        date: new Date(),
        image: "icons/avatar2.png",
      },
      {
        id: 43178,
        productName: "Heimer Miller Sofa",
        price: 345000,
        purchases: 700,
        date: new Date(),
        image: "icons/avatar3.png",
      },
    ];

    //Customers SuperAdmin
    const totalNoOfCustomers = {
      title:"Total No of Customers",
      value:"4000"
    }
    const activeNoOfCustomers = {
      title:"Active No of Customers",
      value:"3100"
    }
    const activeCustomersToday = {
      title:"Active Customers Today",
      value:"415"
    }
    const customersData = [
      {
        id:"43178",
        name:"Joke Ojo",
        email:"renny@yahoo.com",
        totalPurchase:250,
        purchaseValue:250000,
        rewardsValue:30000,
        lastVisit: new Date(),
      },
      {
        id:"43178",
        name:"Seyi Ojo",
        email:"setyi@yahoo.com",
        totalPurchase:250,
        purchaseValue:250000,
        rewardsValue:30000,
        lastVisit: new Date(),
      },
      {
        id:"43178",
        name:"Fela Bisi",
        email:"renny@yahoo.com",
        totalPurchase:250,
        purchaseValue:250000,
        rewardsValue:30000,
        lastVisit: new Date(),
      },
      {
        id:"43178",
        name:"Ireti Kunle",
        email:"renny@yahoo.com",
        totalPurchase:250,
        purchaseValue:250000,
        rewardsValue:30000,
        lastVisit: new Date(),
      },
      {
        id:"43178",
        name:"Lolade Fajobi",
        email:"renny@yahoo.com",
        totalPurchase:250,
        purchaseValue:250000,
        rewardsValue:30000,
        lastVisit: new Date(),
      }
    ]
    //Stores SuperAdmin
   const storeList = [
     {
       id: 3232,
       store:"KYC Ogba",
       location:"Ogba, Lagos",
       manager:"Kunle Oshunkunle",
       dateAdded: new Date(),
       status:"activated" 
     },
     {
      id: 3222,
      store:"KYC Agbado",
      location:"Agbado, Lagos",
      manager:"Felix James",
      dateAdded: new Date(),
      status:"deactivated" 
    },
    {
      id: 3222,
      store:"KYC VI",
      location:"VI, Lagos",
      manager:"Emmanuel Adebiyi",
      dateAdded: new Date(),
      status:"activated" 
    },
    {
      id: 3222,
      store:"KYC VI 2",
      location:"VI 2, Lagos",
      manager:"Charles",
      dateAdded: new Date(),
      status:"deactivated"
    },

   ]

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
            changepassword,
            showSidebar, 
            setShowSidebar,
            // Dashboard SuperAdmin
            totalSalesOverview,
            totalStoresOverview,
            activeCustomersOverview,
            top5SalesPeriod,
            top5Sales,
            salesData,
            visitsData,
            stores,
            // Revenue SuperAdmin
            revenueData,
            totalPurchasesOverview,
            totalRevenueMadeOverview,
            transactionData,
            //Product SuperAdmin
            totalProductsOverview,
            productsData,
            //Customer SuperAdmin
            totalNoOfCustomers,
            activeNoOfCustomers,
            activeCustomersToday,
            customersData,
            // stores
            storeList
        }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()
