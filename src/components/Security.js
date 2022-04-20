import React, {useState} from 'react'
import Input from './Input'

export default function Security(){
    const [showPasswords, setShowPasswords ] = useState({
        old: false,
        new: false,
        confirm: false,
      });
    return(
        <div className='auth_form' style={{boxShadow:"unset"}}>
        <div className='auth_form_container'>
        <div className='fieldset'>
            <label className='label'>Old Password</label>
            <div className='input_box'>
            <Input 
                            type={showPasswords.old ? "text" : "password"}
            />
            <span 
                className='togglepassword'
                onClick={() => setShowPasswords({...showPasswords, old: !showPasswords.old})}
            >
                {showPasswords.old ? "Hide" : "Show"}
            </span>
            </div>
        </div>
        <div className='fieldset'>
            <label className='label'>New Password</label>
            <div className='input_box'>
            <Input 
                            type={showPasswords.new ? "text" : "password"}
            />
            <span 
                className='togglepassword'
                onClick={() => setShowPasswords({...showPasswords, new: !showPasswords.new})}
            >
                {showPasswords.new ? "Hide" : "Show"}
            </span>
            </div>
        </div>
        <div className='fieldset'>
            <label className='label'>Confirm New Password</label>
            <div className='input_box'>
            <Input 
                            type={showPasswords.confirm ? "text" : "password"}
            />
            <span 
                className='togglepassword'
                onClick={() => setShowPasswords({...showPasswords, confirm: !showPasswords.confirm})}
            >
                {showPasswords.confirm ? "Hide" : "Show"}
            </span>
            </div>
        </div>
        <div className='btn_ btn_orange'  onClick={()=> {}} >Save Changes</div>
        </div>
    </div>
    )
}
