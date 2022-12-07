import React, { useState } from "react";
import axios from "axios"
const SeniorPhase = () => {
   const [SeniorForm, setSForm] = useState({
      firstName: " ",
      lastName: " ",
      email: " ",
      phone:" ",
      address:" ",
      nextOfKinFirstName: " ",
      nextOfKinLastName: " ",
      nextOfKinEmail:" ",
      nextOfKinPhone:" ",
      selector:" ",
      selector1:" "
   })
   const Changer = (e) => {
      const Newdata = { ...SeniorForm }
      Newdata[e.target.name] = e.target.value
      setSForm(Newdata)
   }
   const OnSubmit = (e) => {
      e.preventDefault();
   }
   const Show = () => {
      console.log("SeniorForm", SeniorForm)
      const Details=({
      firstName:SeniorForm.firstName,
      lastName:SeniorForm.lastName,
      email:SeniorForm.email,
      phone:SeniorForm.phone,
      address:SeniorForm.address,
      nextOfKinFirstName:SeniorForm.nextOfKinFirstName,
      nextOfKinLastName:SeniorForm.nextOfKinLastName,
      nextOfKinEmail:SeniorForm.nextOfKinEmail,
      nextOfKinPhone:SeniorForm.nextOfKinPhone,
      selector:SeniorForm.selector
      })
      axios.post("http://localhost:1500/app/phases",Details)
      .then(res=>(res.data))
      
      setSForm({
      firstName: " ",
      lastName: " ",
      email: " ",
      phone:" ",
      address:" ",
      nextOfKinFirstName: " ",
      nextOfKinLastName: " ",
      nextOfKinEmail:" ",
      nextOfKinPhone:" ",
      selector:" ",
      selector1:" "
      })
   }
   return (
      <div className="senior-outer">
      <div className="phases">
         <div className="phases-wrap">
            <form className="input-form-group" onSubmit={OnSubmit}>
               <h1 className="title"> New Application</h1>
               <label>FirstName: </label>
                  <div >
                     <input type="text" 
                     name="firstName" 
                     onChange={Changer} 
                     value={SeniorForm.firstName} 
                     className="ad" 
                     placeholder="Enter firstname"/>
                  </div> 
               <label> LastName: </label>
              <div>  
                  <input type="text"
                   name="lastName" 
                   onChange={Changer} 
                   value={SeniorForm.lastName}  
                   className="ad"  
                   placeholder="Enter lastname" />
               </div>
               <label> Email: </label>
              <div>  
                  <input type="text" 
                  name="email" 
                  onChange={Changer} 
                  value={SeniorForm.email}  
                  className="ad" 
                  placeholder=" Enter email"/>
               </div>
               <label> Phone#: </label>
               <div>  
               <input type="text" 
               name="phone" 
               onChange={Changer} 
               value={SeniorForm.phone}  
               className="ad" 
               placeholder=" Enter phone"/>
                </div>
                <label> Address: </label>
                <div>
                <input type="text" 
                name="address" 
                onChange={Changer} 
                value={SeniorForm.address}  className="ad" 
                placeholder=" Enter address"/>
                </div>
                <div class="form-group"> 
  <label>Select Phase</label>
    <div>
    <br/>
  <label>Senior Phase grade(if you choose senior phase)</label>
  <div>
    <select name="selector"  type="text" className="senior_grad"  value={SeniorForm.selector}  onChange={Changer} >
      <option value=" " > </option>
      <option>grade 8</option>
      <option>grade 9</option>
    </select>  
  </div>
  <br/>
  <label>Select Sports</label>
  <div>
    <select name="selector1"  type="text" className="senior_grad" value={SeniorForm.selector1}  onChange={Changer}>
      <option value=" " > </option>
      <option>Netball</option>
      <option>Football</option>
    </select>  
  </div>
  <br/>
  <br/>
  <label class="control-label">Next of Kin details</label>
  </div>
  <div>
    <br/>
  <label>FirstName: </label>
                  <div >
                     <input type="text" 
                     name="nextOfKinFirstName" 
                     onChange={Changer} 
                     value={SeniorForm.nextOfKinFirstName} 
                     className="ad" 
                     placeholder="Enter firstname"/>
                  </div> 
               <label> LastName: </label>
              <div>  
                  <input type="text" 
                  name="nextOfKinLastName" 
                  onChange={Changer} 
                  value={SeniorForm.nextOfKinLastName}  
                  className="ad"  
                  placeholder="Enter lastname" />
               </div>
               <label> Email: </label>
              <div>  
                  <input type="text" 
                  name="nextOfKinEmail" 
                  onChange={Changer} 
                  value={SeniorForm.nextOfKinEmail}  
                  className="ad" 
                  placeholder=" Enter email"/>
               </div>
               <label> Phone#: </label>
               <div>  
               <input type="text" 
               name="nextOfKinPhone" 
               onChange={Changer} 
               value={SeniorForm.nextOfKinPhone}  
               className="ad" 
               placeholder=" Enter phone number"/>
                </div>
                </div>
                 </div>
               <div className="submit-bottom">
                  <button className="submit" onClick={Show}>Send</button>
               </div>
            </form>
         </div>
      </div>
      </div>
   ) ;
}
export default SeniorPhase