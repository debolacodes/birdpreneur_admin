import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import {mainFunctions} from "../providers/MainProvider";

export default function Login() {
    const {
        login
    } = useContext(mainFunctions)
    const [userData, setUserData] = useState({
        email: "",
    })

  return (
    <div className='auth_bg'>
        <div className='auth_form'>
            <div className='auth_form_container'>
                <div className='logo'></div>
                <div className='auth_title'>Welcome Back!</div>
                <div className='fieldset'>
                    <label className='label'>Email Address</label>
                    <div className='input_box'>
                        <input type="text" onChange={(e) => setUserData({...userData, email: e.target.value})} />
                    </div>
                </div>

                <div className='fieldset'>
                    <label className='label'>Password</label>
                    <div className='input_box'>
                        <input type="password" />
                        <span className='togglepassword'>Hide</span>
                    </div>
                    <Link to="/forgotpassword">
                        <div className='more-info'>Forgot Password</div>
                    </Link>
                </div>

                <div className='btn_ btn_orange' onClick={()=>login(userData)}>LOGIN</div>


            </div>
        </div>
    </div>
  )
}
