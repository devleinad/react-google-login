import React,{useState, useEffect} from 'react';
import GoogleLogin from "react-google-login";
import "bootstrap/dist/css/bootstrap.css";
import UserProfile from './UserProfile';
const clientId = "938653111867-uq8cthjv0i077ottd5ga2ibp1t3vv3md.apps.googleusercontent.com";
function App() {
  const [user,setUser] = useState();

  const handleResponseFromGoogle = res => {
    if(res !== 'undefined'){
        localStorage.setItem('user',JSON.stringify(res.profileObj));
        //extract details that will be needed from the response
        setUser(res.profileObj);
    }
  
  }

  useEffect(() => {
    //If user is already in storage, then we grab details
    const existingUser = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    if(existingUser) {
      setUser(existingUser);
    }else{
      setUser(null);
    }
  },[])

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
  }

  let content;
  if(user){
    content = <UserProfile user={user && user} handleLogout={handleLogout}/>
  }
  else{

    content = <div className='d-flex justify-content-center mt-4'>
      <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  type="button"
                  className="btn btn-lg btn-info border-0 rounded text-white"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login in using Google
                </button>
              )}
              onSuccess={handleResponseFromGoogle}
              onFailure={handleResponseFromGoogle}
              cookiePolicy="single_host_origin"
            />
    </div>
  }
  return <>
    {content}
  </>;
}

export default App;
