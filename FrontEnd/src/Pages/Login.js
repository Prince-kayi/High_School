import React, { useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"
import "./Pages.css"
const Login = () => {
   const [Loginform, setLForm] = useState({
      username: " ",
      password: " "
   })
   const [error,setErrors]=useState({
      username: " ",
      password: " "
   })
   const[successMsg,setMsg]=useState("");
   const Changer = (e) => {
      const Newdata = { ...Loginform }
      Newdata[e.target.name] = e.target.value
      setLForm(Newdata)
   }
   const Submit = (e) => {
      e.preventDefault();
      if(Loginform.username===" " || Loginform.password===""){
         setErrors((LoginForm)=>({
         ...LoginForm,
         username:"Please enter your email address",
         password:"Please enter  your password"
         }));
         return; 
        }
        if(!Loginform.username.includes("@")){
         setErrors((LoginForm)=>({
         ...LoginForm,
         username:"Invalid email"
         }));
         return; 
        }
        else{
         setErrors((LoginForm)=>({
            ...LoginForm,
            username:" "
            }));   
        if(!Loginform.password.includes("@")){
         setErrors((LoginForm)=>({
         ...LoginForm,
         password:"password does not match"
         }));  
        }
        else{
         setErrors((LoginForm)=>({
            ...LoginForm,
            password:" "
            }));
 return setMsg("you have successfully logged in"); 
         }
      }
   }
   const getOutcome = () => {
      console.log("LoginForm", Loginform)
      const signed=({
      username:Loginform.username,
      password:Loginform.password
      })
      axios.post(" http://localhost:1500/app/sign-in",signed)
      .then(res=>(res.data))
      setLForm({
         username: " ",
        password: " "
      })
   }
   return (
      <>
       {successMsg ?(
      <div className='logged-in'>
       <h1>You have successfully Logged In</h1>
       <br/>
       <div className="logn">
         <div className="logn-wrap">
          <h5>Welcome to Mmabatho</h5>
         </div>
       </div>
         <p>
         <Link to="/">Logout</Link>
       </p>
      </div>
     ):(
      <div className="outer">
      <div className="login-class">
         <div className="login-container">
            <form className="login-form" onSubmit={Submit}>
            {successMsg &&<div className='finally'>{successMsg}</div>}
               <h1 className="title"> Login</h1>
               <label>Username: </label>
                  <div>
                     <input type="text" 
                     name="username" 
                     onChange={Changer} 
                     value={Loginform.username} 
                     className="ad" />
                {!!error.username&&<div className="error-msg">{error.username}</div>}
                  </div> 
               <label> Password: </label>
             <a href="/forgotPass" className="fogot">Forgot password?</a>
              <div >  
                  <input type="password" 
                  name="password" 
                  onChange={Changer} 
                  value={Loginform.password}
                   className="ad" />
                  {!!error.password &&<div className="error-msg">{error.password}</div>}
               </div>
               <div className="login-submit-botton">
                  <button className="submit" onClick={getOutcome}> Login</button>
                  <p>Not yet a member? <a href="/sign-up"> Sign Up</a></p>
               </div>
            </form>
         </div>
      </div>
      </div>
     )
}
      </>
   ) 
}
export default Login