import React from 'react'

const AddStaffModal = ({
  newStaff,
  setNewStaff,
  editStaff,
  setEditStaff,
}) => {
  return (
    <div className='w-100 h-100 d-flex flex-column align-items-center justify-content-center add_staff_modal'>
      <div className='title'>
        {newStaff ? "Add Staff" : "Edit Staff"}  
      </div>
      <p className='subtitle text-center'>
        This is place holder text. The basic dialog for modals should contain only valuable and relevant information. 
      </p>
      {newStaff && (
        <div className='auth_form_container'>
          <div className='fieldset'>
            <label className='label'>Full Name</label>
            <div className='input_box'>
              <input 
                type="text" 
                value={newStaff.fullName}
                onChange={(e) => setNewStaff({...newStaff, fullName: e.target.value})}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Email</label>
            <div className='input_box'>
              <input 
                type="email" 
                value={newStaff.email}
                onChange={(e) => setNewStaff({...newStaff, email: e.target.value})}
              />
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {}}>Add User</div>
        </div> 
      )}
      {editStaff && (
        <div className='auth_form_container'>
          <div className='fieldset'>
            <label className='label'>Full Name</label>
            <div className='input_box'>
              <input 
                type="text" 
                value={editStaff.fullName}
                onChange={(e) => setEditStaff({...editStaff, fullName: e.target.value})}
              />
            </div>
          </div>
          <div className='fieldset'>
            <label className='label'>Email</label>
            <div className='input_box'>
              <input 
                type="email" 
                value={editStaff.email}
                onChange={(e) => setEditStaff({...editStaff, email: e.target.value})}
              />
            </div>
          </div>

          <div className='btn_ btn_orange'  onClick={()=> {}}>Update User</div>
        </div>
      )}
    </div>
  )
}

export default AddStaffModal