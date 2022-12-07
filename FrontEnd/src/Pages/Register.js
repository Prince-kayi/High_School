import React,{useState} from "react";
import axiso from "axios"
const Register=()=>{
     const [forms,setForms]=useState({
         firstName:" ",
         lastName:" ",
         email: " ",
         retypeEmail: " ",
         password: " ",
         retypePassword: " ",
         Mnumber:" ",
     })
     const [errors,setError]=useState({
        firstName:" ",
        lastName:" ",
        email: " ",
        retypeEmail: " ",
        password: " ",
        retypePassword: " ",
        Mnumber:" ",
     })
     const handlerChange=(e)=>
     {
             const{name,value,type,checked}=e.target
             setForms((forms)=>({
                     ...forms,
                     [name]:type==="checkbox"? checked:value
             }))
     }
     const ShowOutcome=()=>{
         console.log("forms",forms)
         const registered=({
            firstName:forms.firstName,
            lastName:forms.lastName,
            email:forms.email,
            retypeEmail:forms.retypeEmail,
            password:forms.password,
            retypePassword:forms.retypePassword,
            Mnumber:forms.Mnumber
         })
         axiso.post(" http://localhost:1500/app/sign-up",registered)
         .then(res=>console.log(res.data))
         setForms({
            firstName:" ",
            lastName:" ",
            email: " ",
            retypeEmail: " ",
            password: " ",
            retypePassword: " ",
            Mnumber:" ",
         })
     }
     //validate form
     const onSubmit=(e)=>{
         e.preventDefault();
        // setError(ValidRegisters(errors))

        if (forms.firstName===" " ||forms.lastName===""|| forms.email==="" || forms.password===""|| forms.Mnumber===""){
            setError((forms)=>({
            ...forms,
            firstName:"Please enter your first Name",
            lastName:"Please enter  your Last Name",
            email:"Please enter your email address",
            password:"Please enter  your password",
            Mnumber:"Please enter a Phone/Mobile number"    
            }));
       return;
         }     
          else  {
            setError((forms)=>({
                ...forms,
                firstName:" ",
                lastName: " "    
            }))          
     }   
  if(!forms.email.includes("@")) {
    setError((forms)=>({
        ...forms,
        email:" enter valid email address"
    }))       
}
else {
    setError((forms)=>({
        ...forms,
        email:" "
    }))       
}
if(forms.password.length < 5) {
    setError((forms)=>({
        ...forms,
        password:" password is too shot"
    }))       
}
else {
    setError((forms)=>({
        ...forms,
        password:" "
    }))       
}
if(forms.Mnumber.length < 10) {
    setError((forms)=>({
        ...forms,
        Mnumber:" Mobile/Phone number must be 10 digits"
    }))       
}
else {
    setError((forms)=>({
        ...forms,
        Mnumber:" "
    }))       
}
    }
    return(
        <div className="register-outer">
        <div className="register-class">
            <div className="register-container">
                <form className="reg-form" onSubmit={onSubmit}>
                    <h1 className="title"> Register</h1>
                    <div className="reg-form-in">
                    <label>First Name*:
                      <input type="text" 
                      name="firstName" 
                      onChange={handlerChange} 
                      value={forms.firstName} 
                       />
                    </label>
                     {!!errors.firstName &&<div className="errors-msg">{errors.firstName}</div>}
                    </div>
                    <div  className="reg-form-in">
                    <label>
                 Last Name*:     
                 <input type="text" 
                 name="lastName" 
                 onChange={handlerChange} 
                 value={forms.lastName}/>
                    </label>
                    {!!errors.lastName && <div className="errors-msg">{errors.lastName}</div>}
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Email*:     
                 <input type="text" 
                    name="email" 
                 onChange={handlerChange} 
                 value={forms.email} />
                    </label>
                    {!!errors.email && <div className="errors-msg">{errors.email}</div>}
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Retype Email*:     
                 <input type="text" 
                 name="retypeEmail" 
                 onChange={handlerChange} 
                 value={forms.retypeEmail} />
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                 Password*:     
                 <input type="password" 
                 name="password" 
                 onChange={handlerChange}  
                 value={forms.password} />
                    </label>
                    {!!errors.password &&<div className="errors-msg">{errors.password}</div>}
                    </div>
                    <div className="reg-form-in">
                    <label>
                Retype Password*:    
                 <input type="password" 
                name="retypePassword" 
                onChange={handlerChange} 
                value={forms.retypePassword}/>
                    </label>
                    </div>
                    <div className="reg-form-in">
                    <label>
                Mobile Number*:     
                <input type="text" 
                name="Mnumber" 
                onChange={handlerChange} 
                value={forms.Mnumber}  />
                    </label>
                    {!!errors.Mnumber && <div className="errors-msg">{errors.Mnumber}</div>}
                    </div>
                    <div className="register-submit-bottom">
                   <button className="register-now" onClick={ShowOutcome}>Register Now </button>
               </div>
                </form>
            </div>   
        </div>
      </div>  
    );
}
export default Register