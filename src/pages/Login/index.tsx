import React from 'react'
import { useNavigate } from "react-router-dom";

export function Login():JSX.Element {
    
    const [email,setEmail]=React.useState<string>("")
    const [password,setPassword]=React.useState<string>("")

    const navigate = useNavigate();
   function onclickLoginHandleEvent(email:string,password:string)
   {  
    if(email!=="" && password!=="")
    {
        navigate("/profile")}
}

  return (
        <div  style={{gap:"30px"}}>
    <h1>Login </h1>
    <div className="lgn">
    <div className="d-flex">
        <span>Email  </span></div><div>
    <input type="email" className="input" placeholder='Email' value={email} name="email"
     onChange={(event)=>setEmail(event.target.value)}/>
    </div>
    <div className='d-flex'>
        <span>Mot de passe </span> </div><div> 
    <input type="password" className="input" placeholder='Password' name="password" 
    value={password} onChange={(event)=>setPassword(event.target.value)}/>
    </div></div>
    <button type="submit" className="button" onClick={()=>{onclickLoginHandleEvent(email,password)}}>Valider</button>
</div>
  
  )
}

