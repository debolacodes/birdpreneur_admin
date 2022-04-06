import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import {mainFunctions} from "../providers/MainProvider";


export default function Sidebar() {
    const {
        showSidebar,
        setShowSidebar
    } = useContext(mainFunctions)
  let location = useLocation();
  return (
    <div className={`sidebar_ ${showSidebar ? "show_sidebar" : ""}`}>
        {showSidebar &&
        <div className="close_menu_bar" onClick={()=>setShowSidebar(false)}></div>    
        }
        <div className='logo'></div>
        <div className='title'>KFC Engagement Wallet</div>
        <div className='side-nav'>
            <Link to="/dashboard">
                <div className={`side-nav-item ${location.pathname === "/dashboard" ? "active" : ""}`}>
                    <div className='icon dashboard'></div>
                    <div className='text'>Dashboard</div>
                </div>
            </Link>
            <Link to="/revenue">
            <div className={`side-nav-item ${location.pathname === "/revenue" ? "active" : ""}`}>
                <div className='icon revenue'></div>
                <div className='text'>Revenue</div>
            </div>
            </Link>

            <Link to="/products">
            <div className={`side-nav-item ${location.pathname === "/products" ? "active" : ""}`}>
                <div className='icon products'></div>
                <div className='text'>Products</div>
            </div>
            </Link>

            <Link to="/customers">
            <div className={`side-nav-item ${location.pathname === "/customers" ? "active" : ""}`}>
                <div className='icon customers'></div>
                <div className='text'>Customers</div>
            </div>
            </Link>

            <Link to="/stores">
                <div className={`side-nav-item ${location.pathname === "/stores" ? "active" : ""}`}>
                    <div className='icon stores'></div>
                    <div className='text'>Stores</div>
                </div>
            </Link>

            <Link to="/account">
                <div className={`side-nav-item ${location.pathname === "/account" ? "active" : ""}`}>
                    <div className='icon account'></div>
                    <div className='text'>Account Settings</div>
                </div>
            </Link>
        </div>
    </div>
  )
}
