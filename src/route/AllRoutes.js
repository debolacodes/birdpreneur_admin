import React from 'react'
import {Routes, Route} from 'react-router-dom'

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
import SuperAdminStores from "../pages/superAdmin/Stores"
export default function AllRoutes() {
  return (
    <div className='body'>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
          <Route exact path="/changepassword" element={<ChangePassword/>} />
          <Route exact path="/account" element={<AccountSettings/>} />
          <Route exact path="/dashboard" element={<SuperAdminDashboard/>} />
          <Route exact path="/revenue" element={<SuperAdminRevenue/>} />
          <Route exact path="/products" element={<SuperAdminProducts/>} />
          <Route exact path="/stores" element={<SuperAdminProducts/>} />
          <Route exact path="/customers" element={<SuperAdminCustomers/>} />
          <Route exact path="/customers/:id" element={<SuperAdminCustomerDetails/>} />
      </Routes>
    </div>
  )
}
