import React, { useState } from "react";
import axios from "axios"
const FetPhase = () => {
   const [FetForm, setfForm] = useState({
      firstName: " ",
      lastName: " ",
      email: " ",
      phone:" ",
      address:" ",
      nextOfKinFirstName: " ",
      nextOfKinLastName: " ",
      nextOfKinEmail:" ",
      nextOfKinPhone:" ",
      selector1:" ",
      selector2:" ",
   })
   const Changer = (e) => {
      const Newdata = { ...FetForm }
      Newdata[e.target.name] = e.target.value
      setfForm(Newdata)
   }
   const OnSubmit = (e) => {
      e.preventDefault();
   }
   const getOutcome = () => {
      console.log("fetForm", FetForm)
      const details=({
      firstName:FetForm.firstName,
      lastName:FetForm.lastName,
      email:FetForm.email,
      phone:FetForm.phone,
      address:FetForm.address,
      nextOfKinFirstName:FetForm.nextOfKinFirstName,
      nextOfKinLastName:FetForm.nextOfKinLastName,
      nextOfKinEmail:FetForm.nextOfKinEmail,
      nextOfKinPhone:FetForm.nextOfKinPhone,
      selector1:FetForm.selector1,
      selector2:FetForm.selector2
      })
      axios.post("http://localhost:1500/app/fet",details)
      .then(res=>(res.data))
      setfForm({
         firstName: " ",
         lastName: " ",
         email: " ",
         phone:" ",
         address:" ",
         nextOfKinFirstName: " ",
         nextOfKinLastName: " ",
         nextOfKinEmail:" ",
         nextOfKinPhone:" ",
          selector1:" ",
          selector2: " "
      })
   }
   return (
      <div className="senior-outer">
      <div className="fet-group">
         <div className="phases-wrap">
            <form className="input-form-group" onSubmit={OnSubmit}>
               <h1 className="title"> New Application</h1>
               <label>FirstName: </label>
                  <div >
                     <input type="text" name="firstName" 
                     onChange={Changer} 
                     value={FetForm.firstName} 
                     className="ad" 
                     placeholder="Enter firstname"/>
                  </div> 
               <label> LastName: </label>
              <div>  
                  <input type="text"
                   name="lastName" 
                   onChange={Changer} 
                   value={FetForm.lastName} 
                    className="ad"  
                    placeholder="Enter lastname" />
               </div>
               <label> Email: </label>
              <div>  
                  <input type="text" 
                  name="email" 
                  onChange={Changer} 
                  value={FetForm.email}  
                  className="ad" 
                  placeholder=" Enter email"/>
               </div>
               <label> Phone#: </label>
               <div>  
               <input type="text" 
               name="phone" 
               onChange={Changer} 
               value={FetForm.phone}  
               className="ad" 
               placeholder=" Enter phone"/>
                </div>
                <label> Address: </label>
                <div>
                <input type="text" 
                name="address"
                 onChange={Changer} 
                 value={FetForm.address} 
                  className="ad" 
                  placeholder=" Enter address"/>
                </div>
                <div class="form-group"> 
  <label>Select Phase</label>
    <div>
    <br/>
  <label>Senior Phase grade(if you choose senior phase)</label>
  <div>
    <select name="selector1"  type="text" className="senior_grad" onChange={Changer} value={FetForm.selector1} >
      <option value=" " > </option>
      <option>grade 10</option>
      <option>grade 11</option>
      <option>grade 12</option>
    </select>  
  </div>
  <br/>
  <label>Select Subject</label>
  <div>
    <select name="selector2"  type="text" className="senior_grad" onChange={Changer} value={FetForm.selector2} >
      <option value=" " > </option>
      <option>Science</option>
      <option>Commerce</option>
      <option>General Studies</option>
    </select>  
  </div>
  <br/>
  <br/>
  <label>Next of Kin details</label>
  </div>
  <div>
    <br/>
  <label>FirstName: </label>
                  <div >
                     <input type="text" 
                     name="nextOfKinFirstName" 
                     onChange={Changer} 
                     value={FetForm.nextOfKinFirstName} 
                     className="ad" 
                     placeholder="Enter firstname"/>
                  </div> 
               <label> LastName: </label>
              <div>  
                  <input type="text" 
                  name="nextOfKinLastName" 
                  onChange={Changer} 
                  value={FetForm.nextOfKinLastName}  
                  className="ad"  
                  placeholder="Enter lastname" />
               </div>
               <label> Email: </label>
              <div>  
                  <input type="text" 
                  name="nextOfKinEmail" 
                  onChange={Changer} 
                  value={FetForm.nextOfKinEmail}  
                  className="ad" 
                  placeholder=" Enter email"/>
               </div>
               <label> Phone#: </label>
               <div>  
               <input type="text" 
               name="nextOfKinPhone" 
               onChange={Changer} 
               value={FetForm.nextOfKinPhone} 
                className="ad" 
                placeholder=" Enter phone number"/>
                </div>
                </div>
                 </div>
               <div className="submit-bottom">
                  <button className="submit" onClick={getOutcome}>Send</button>
               </div>
            </form>
         </div>
      </div>
      </div>
   ) ;
}
export default FetPhase