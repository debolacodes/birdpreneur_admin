import React, {useContext} from 'react'
import {mainFunctions} from "../providers/MainProvider";

export default function ForgotPassword() {
    const {
        resetpassword
    } = useContext(mainFunctions)
  return (
    <div className='auth_bg'>
        <div className='auth_form'>
            <div className='auth_form_container'>
                <div className='logo'></div>
                <div className='auth_title'>Forgot Password</div>
                <div className='fieldset'>
                    <label className='label'>Email Address</label>
                    <div className='input_box'>
                        <input type="text" />
                    </div>
                </div>

                <div className='btn_ btn_orange'  onClick={()=>resetpassword()}>RESET PASSWORD</div>


            </div>
        </div>
    </div>
  )
}
