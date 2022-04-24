import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { useSelector } from "react-redux";

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import ChangePassword from '../pages/ChangePassword';
import AccountSettings from '../pages/AccountSettings';

// superadmin pages
import SuperAdminDashboard from "../pages/superAdmin/Dashboard"
import SuperAdminRevenue from "../pages/superAdmin/Revenue"
import SuperAdminCustomers from "../pages/superAdmin/Customers"
import SuperAdminProducts from "../pages/superAdmin/Products"
import SuperAdminCustomerDetails from "../pages/superAdmin/CustomerDetails"
import SuperAdminTransactionDetails from "../pages/superAdmin/TransactionDetails"
import SuperAdminStores from "../pages/superAdmin/Stores"
import SuperAdminRewards from "../pages/superAdmin/Rewards"

// admin pages
import AdminDashboard from "../pages/admin/Dashboard";
import AdminRevenue from "../pages/admin/Revenue"
import AdminStoreCashiers from "../pages/admin/StoreCashiers"
import AdminCustomers from "../pages/admin/Customers"
import AdminCustomerDetails from "../pages/admin/CustomerDetails"
import AdminProducts from "../pages/admin/Products"

// cashier pages
import CashierDashboard from "../pages/cashier/Dashboard";

export default function AllRoutes() {
	const { role } = useSelector(
		(state) => state.auth
	);

  return (
    <div className='body'>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
          <Route exact path="/changepassword" element={<ChangePassword/>} />
          <Route exact path="/account" element={<AccountSettings/>} />
          <Route exact path="/dashboard" element={role === "admin" 
            ? <AdminDashboard /> 
            : role === "superadmin" 
            ? <SuperAdminDashboard/> 
            : role === "cashier"
            && <CashierDashboard/> } 
          />
          <Route exact path="/revenue" element={role === "admin" 
            ? <AdminRevenue /> 
            : "superadmin" 
            && <SuperAdminRevenue/> }
          />
          <Route exact path="/products" element={role === "admin" 
            ? <AdminProducts /> 
            : "superadmin" 
            && <SuperAdminProducts/> }
          />
          <Route exact path="/stores" element={role === "admin" 
            ? <AdminStoreCashiers /> 
            : "superadmin" 
            && <SuperAdminStores/> }
          />
          <Route exact path="/customers" element={role === "admin" 
            ? <AdminCustomers /> 
            : "superadmin" 
            && <SuperAdminCustomers/> }
          />
          <Route exact path="/rewards" element={role === "admin" 
            ? <AdminDashboard /> 
            : "superadmin" 
            && <SuperAdminRewards/> }
          />
          <Route exact path="/customers/:id" element={role === "admin" 
            ? <AdminCustomerDetails /> 
            : "superadmin" 
            && <SuperAdminCustomerDetails/> }
          />
          <Route exact path="/transaction/:id" element={role === "admin" 
            ? <AdminCustomerDetails /> 
            : "superadmin" 
            && <SuperAdminTransactionDetails /> }
          />
      </Routes>
    </div>
  )
}
