import React, {useState} from 'react'
import Input from './Input'

export default function Support() {

  const [showEmail, setShowEmail] = useState(false)
  return (
    <div className='auth_form' style={{boxShadow:"unset"}} >
        <div className='auth_form_container'>
            <div className='fieldset'>
                <label className='label'>Company Email Address</label>
                <div className='input_box'>
                    <Input 
                        type={showEmail ? "text" : "password"}
                    />
                    <span 
                        className='togglepassword'
                        onClick={() => setShowEmail(!showEmail)}
                        >
                        {showEmail ? "Hide" : "Show"}
                    </span>
                    <div 
                    className='togglepassword'
                    onClick={() => setShowEmail(!showEmail)}
                    >
                    </div>
                </div>
            </div>
            <div className='fieldset'>
                <label className='label'>Phone Number</label>
                <div className='input_box'>
                    <Input 
                        type="text"
                    />
                    <div 
                    className='togglepassword'
                    onClick={() => setShowEmail(!showEmail)}
                    >
                    </div>
                </div>
            </div>
            <div className='btn_ btn_orange'  onClick={()=> {}} >Save Changes</div>
      </div>
    </div>
  )
}
