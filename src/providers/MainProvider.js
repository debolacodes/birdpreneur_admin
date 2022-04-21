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
      },
      {
        id: "43121",
        name: "KFC V1",
        location: "4 Adeola Odeku Rd, VI, Lagos",
        manager: "Patience Eze",
        revenue: "25000",
        total_customers:6
      },
      {
        id: "43179",
        name: "KFC V1 2",
        location: "50 Adeola Odeku Rd, VI, Lagos",
        manager: "Ifeoma Oluoma",
        revenue: "9025000",
        total_customers:211
      },
      {
        id: "43180",
        name: "KFC Lekki",
        location: "50 Freedom Way, Lekki, Lagos",
        manager: "Elohor Thomas",
        revenue: "6225000",
        total_customers:2111
      },
      {
        id: "43181",
        name: "KFC Oshodi",
        location: "50 Freedom Way, Lekki, Lagos",
        manager: "Dare Odunmade",
        revenue: "225000",
        total_customers:361
      },
      {
        id: "43182",
        name: "KFC Ibadan",
        location: "50 Challenge Rd, Ibadan",
        manager: "Emmanuel Adebiyi",
        revenue: "675000",
        total_customers:975
      },
      {
        id: "43183",
        name: "KFC Ibadan",
        location: "50 Challenge Rd, Ibadan",
        manager: "Stella Damasus",
        revenue: "895000",
        total_customers:325
      },
      {
        id: "43184",
        name: "KFC Abuja",
        location: "50 Challenge Rd, Ibadan",
        manager: "Reece James",
        revenue: "95000",
        total_customers:1125
      },
      {
        id: "43184",
        name: "KFC Abuja",
        location: "50 Rd, Ota",
        manager: "Reece James",
        revenue: "95000",
        total_customers:1125
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
        store: "KFC Egbeda",
        username: "Coach Tabby",
        purchase: "DJI Mavic Pro 2",
        customerName: "Adunoluwa Adeyemi",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Success",
      },
      {
        id: 43179,
        username: "John Doe",
        store: "KFC Wuse",
        purchase: "DJI Mavic Pro 2",
        customerName: "John Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Pending",
      },
      {
        id: 43190,
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
        id: 43191,
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
        id: 43192,
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
        id: 43193,
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
        id: 43194,
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
        id: 43195,
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
        id: 43196,
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
        id: 43197,
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
        id: 43198,
        username: "Jane Doe",
        purchase: "DJI Mavic Pro 2",
        customerName: "Jane Doe",
        purchaseValue: 345000,
        rewardsValue: 345000,
        date: new Date(),
        status: "Failed",
      },
      {
        id: 43199,
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
        id: 43200,
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
        id: 43210,
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
        id: 43211,
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
        id: 43212,
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
        id: 43213,
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
       active:true 
     },
     {
      id: 3222,
      store:"KYC Agbado",
      location:"Agbado, Lagos",
      manager:"Felix James",
      dateAdded: new Date(),
      active:false
    },
    {
      id: 3222,
      store:"KYC VI",
      location:"VI, Lagos",
      manager:"Emmanuel Adebiyi",
      dateAdded: new Date(),
      active:true 
    },
    {
      id: 3222,
      store:"KYC VI 2",
      location:"VI 2, Lagos",
      manager:"Charles",
      dateAdded: new Date(),
      active:false
    },

   ]

   //Rewards
   const productDeals = [
    {
     id:"3232",
     name:"Pancake",
     price:"345000",
     type:"percentage",
     value:10,
     image:"icons/pancake.jpg"     
    },
    {
      id:"9717",
      name:"Biscuits",
      price:"345100",
      type:"percentage",
      value:10,
      image:"icons/biscuit.jpg"     
     },
     {
      id:"3963",
      name:"Burger",
      price:"345000",
      type:"unit",
      value:1,
      image:"icons/burger.jpg"
     },

  
  ]

  //Challenges
  const [challenges, setChallenges] = useState([
    {
      id:1,
      title:"Make a purchase",
      subtitle: "Make an online purchase from us",
      reward: 343222,
      active:false,
      removed: false,
      type:"daily"
    },
    {
      id:2,
      title:"Review a purchase",
      subtitle: "Review a purchase",
      reward: 222,
      active:true,
      removed: false,
      type:"daily"
    },
    {
      id:3,
      title:"1 Deposit of N500",
      subtitle: "Make a deposit of N500 or more",
      reward: 402,
      active:false,
      removed: false,
      type:"daily"
    },
    {
      id:4,
      title:"1 non-store purchase",
      subtitle: "Make a purchase from us",
      reward: 5000,
      active:true,
      removed: false,
      type:"daily"
    },
    {
      id:5,
      title:"Complete all daily purchases",
      subtitle: "Make an online purchase from us",
      reward: 345000,
      active:true,
      removed: false,
      type:"daily"
    },
    {
      id:6,
      title:"1 Deposit of N2000 this week",
      subtitle: "Make a deposit of N2000 or more",
      reward: 402,
      active:false,
      removed: false,
      type:"week"
    },
    {
      id:7,
      title:"5 non-store purchase this week",
      subtitle: "Make a purchase from us",
      reward: 7000,
      active:true,
      removed: false,
      type:"week"
    },
    {
      id:8,
      title:"Complete all weekly purchases",
      subtitle: "Make an online purchase from us",
      reward: 3450,
      active:true,
      removed: false,
      type:"week"
    },
    {
      id:9,
      title:"1 Deposit of N50000 this month",
      subtitle: "Make a deposit of N500 or more",
      reward: 402,
      active:true,
      removed: false,
      type:"month"
    },
    {
      id:10,
      title:"5 non-store purchase this month",
      subtitle: "Make a purchase from us",
      reward: 5000,
      active:true,
      removed: false,
      type:"month"
    },
    {
      id:11,
      title:"Complete all Monthly purchases this month",
      subtitle: "Make an online purchase from us",
      reward: 345000,
      active:true,
      removed: false,
      type:"month"
    },
  ])

  const toggleChallenge = (id) =>{
    // console.log(id)
    var challenge_temp = [...challenges]
    for(var i = 0; i < challenge_temp.length; i++){
      if(id.toString() === challenge_temp[i].id.toString()){
        challenge_temp[i].active = !challenge_temp[i].active
        setChallenges(challenge_temp)
        break;
      }
      continue;
    }
  }

  //User Roles

  const userRoles = [
    {
      id: 43178,
      name: "Basirat Salihu",
      email:"rennyoni@yahoo.com",
      role:"Super Admin",
      store:"KFC VI"
    },
    {
      id: 43178,
      name: "Basirat Salihu",
      email:"rennyoni@yahoo.com",
      role:"Super Admin",
      store:"KFC VI"
    },
    {
      id: 43178,
      name: "Basirat Salihu",
      email:"rennyoni@yahoo.com",
      role:"Super Admin",
      store:"KFC VI"
    },
    {
      id: 43178,
      name: "Basirat Salihu",
      email:"rennyoni@yahoo.com",
      role:"Super Admin",
      store:"KFC VI"
    },
    {
      id: 43178,
      name: "Basirat Salihu",
      email:"rennyoni@yahoo.com",
      role:"Super Admin",
      store:"KFC VI"
    },

]
//Filters
const [dateFilter, setDateFilter] = useState("")
const [storeFilter, setStoreFilter] = useState("")
const filterDates = [
  {
    id:"alltime",
    title:"All Time"
  },
  {
    id:"yesterday",
    title:"Yesterday"
  },
  {
    id:"lastweek",
    title:"Last Week"
  },
  {
    id:"lastmonth",
    title:"Last Month"
  },
  {
    id:"thisyear",
    title:"This Year"
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
            // Stores
            storeList,
            // Rewards SuperAdmin
            productDeals, 
            // challenges
            challenges,
            toggleChallenge,
            userRoles,
            // filters
            dateFilter, 
            setDateFilter,
            storeFilter, 
            setStoreFilter,
            filterDates
        }}
        >
            {props.children}
        </mainFunctions.Provider>
    )
}

export const mainFunctions = React.createContext()
