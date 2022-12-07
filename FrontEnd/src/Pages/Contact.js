import React, { useState } from "react";
import axios from "axios"
const Contact = () => {
   const [contForm, setLForm] = useState({
      email: " ",
      name: " ",
      subject: " ",
      description:" ",
   })
   const [error,setErrors]=useState({
      email: " ",
      name: " ",
      subject: " ",
      description:" ",
   })
   const[successMsg,setMsg]=useState("");
   const Changer = (e) => {
      const Newdata = { ...contForm }
      Newdata[e.target.name] = e.target.value
      setLForm(Newdata)
   }
   const Submit = (e) => {
      e.preventDefault();
     
   }
   const ShowOutcome = () => {
      console.log("contactForm", contForm)
      const contacted={
         email:contForm.email,
        name:contForm.name,
        subject:contForm.subject,
        description:contForm.description,
        }
        axios.post(" http://localhost:1500/app/contact",contacted)
          .then(res=>console.log(res.data))
          setLForm({
        email: " ",
        name: " ",
        subject: " ",
        description:" ",
          })
   }
   return (
      <div className="contact-outer">
      <div className="input-group">
         <div className="contact-inputs">
            <form className="input-form-group" onSubmit={Submit}>
            {successMsg &&<div className='finally'>{successMsg}</div>}
               <h1 className="title"> Contact Us</h1>
               <label> Name: </label>
                  <div >
                     <input type="text" name="name" onChange={Changer} value={contForm.name} className="ad" placeholder="Enter Name"/>
                {!!error.name&&<div className="error-msg">{error.name}</div>}
                  </div> 
               <label> Email: </label>
              <div>  
                  <input type="text" name="email" onChange={Changer} value={contForm.email}  className="ad"  placeholder="Enter email" />
                  {!!error.emailAddress &&<div className="error-msg">{error.Email}</div>}
               </div>
               <label> Subject: </label>
              <div>  
                  <input type="text" name="subject" onChange={Changer} value={contForm.subject}  className="ad" placeholder=" Enter Subject"/>
                  {!!error.subject &&<div className="error-msg">{error.subject}</div>}
               </div>
               <div>  
                 <textarea name="description" id="description" 
                 onChange={Changer
                 }value={contForm.description}
                  className="texa" 
                  placeholder="text something"></textarea>
                               </div>
               <div className="submit-button">
                  <button className="submit" onClick={ShowOutcome}>Send</button>
               </div>
            </form>
         </div>
      </div>
      </div>
   ) ;
}
export default Contact