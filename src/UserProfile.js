import React from 'react';

function UserProfile(props) {
  return (
    <div className='d-flex justify-content-center'>
    <div className='p-4 text-center'>
       <div>
         <img src={props.user?.imageUrl} alt='User Avatar'/>
       </div>
      <div>
         <h4>Id:<b>{props.user?.googleId}</b></h4>
      </div>
       <div>
        <h4>Full Name:<b>{props.user?.name}</b></h4>
      </div>

      <div>
        <h4>Email:<b>{props.user?.email}</b></h4>
      </div>

      <div>
        < button className='btn btn-lg btn-danger' onClick={props.handleLogout}>Logout</button>
      </div>

    </div>
</div>
  )
}

export default UserProfile;
