import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

export default function Login() {
    const {
        login
    } = useContext(mainFunctions)

  return (
    <div className='auth_bg'>
        <div className='auth_form'>
            <div className='auth_form_container'>
                <div className='logo'></div>
                <div className='auth_title'>Welcome Back!</div>
                <div className='fieldset'>
                    <label className='label'>Email Address</label>
                    <div className='input_box'>
                        <input type="text" />
                    </div>
                </div>

                <div className='fieldset'>
                    <label className='label'>Password</label>
                    <div className='input_box'>
                        <input type="password" />
                        <span className='togglepassword'>Hide</span>
                    </div>
                    <div className='more-info'>Forgot Password</div>
                </div>

                <div className='btn_ btn_orange' onClick={()=>login()}>LOGIN</div>


            </div>
        </div>
    </div>
  )
}
