


// Login userId:admin123 password:admin123

import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'
 const Login = () => {
   const [userId, setuserId]=useState("")
   const [password, setpassword]=useState("")
   const [errors, seterrors]=useState("")
  const [isuserAuthenticated,setautheticated]=useState(false)
   const handleuserIdChange = (e) => {
    setuserId(e.currentTarget.value);
    // console.log(userId)
  };
  const handlepasswordChange = (e) => {
    setpassword(e.currentTarget.value);
    // console.log(password)
  };

  const login= (event)=>{
    event.preventDefault();
    // console.log("", userId)
    // console.log("", password)
    let isFormValid;
        if ((userId.length >= '3' && userId.length < '20') && (password.length >= '3' && password.length < '20')) {
            isFormValid = true;
        } else {
            isFormValid = false
        }
        if (!isFormValid) {
          seterrors("Please enter login credentials to continue")}
        else{
          axios.post("http://localhost:5000/api/authenticateUser", { userId: userId, password: password }).then(response => {

            console.log(response);
            if(response.status==200){
              setautheticated(true)

            }
          
       
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 400){
              // console.log(error.response.data.message)
              seterrors( error.response.data.message );
            } 
            else seterrors( "Sorry unable to connect to system!" );
            console.log(error)
            setautheticated(false)
        });
        }
   }
   if (isuserAuthenticated) {
    return <Redirect to={{
        pathname: '/team',
       
    }} />
}
  return (
    <form className="login-form" onSubmit={login} >
    {errors.length > 0 && <div className="error-message">
        <span className='error'>Error: {errors}</span>
    </div>}
    <div className="userId">
        <label>User ID</label>
        <input type="text"
            id="userId"
            name="userId"
            placeholder="Enter User ID"
            value={userId} 
            onChange={handleuserIdChange}
             />
    </div>
    <br />
    <div className="password">
        <label>Password</label>
        <input type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password} 
            onChange={handlepasswordChange}
           />
    </div>
    <br />
    <button className="login-btn" type="submit">Log In</button>
</form>
  )
}

export  default Login
