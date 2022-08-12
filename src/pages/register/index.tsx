import React from "react"
import { useNavigate } from "react-router-dom";

export function Register ():JSX.Element{
    const navigate = useNavigate();

    const [firstName,setFirstName]=React.useState<string>("")
    const [lastName,setLastName]=React.useState<string>("")
    const [password,setPassword]=React.useState<string>("")
    const [confPassword,setConfPassword]=React.useState<string>("")
    const [email,setEmail]=React.useState<string>("")
    const [isChecked,setIsChecked]=React.useState<boolean>(false)
    
      function onclickRegisterHandleEvent(firstName:string,lastName:string,email:string,password:string,checkboxx:boolean)
   {
    if(password!==confPassword){
        console.log("Confirm password is wrong !")
    }
    if(firstName!=="" && lastName!=="" && password!=="" && confPassword===password && email!=="" && checkboxx===true){
    navigate("/login")}
   }
   
    return (
        <div className="rgstr">
            
           <div>
            <span>First Name </span></div><div>
            <input className="input" type="text" placeholder="First Name" required value={firstName} 
            onChange={(event)=>setFirstName(event.target.value)}/>
            </div> 

            <div>
            <span>Last Name </span></div><div>
            <input type="text" className="input" placeholder="Last Name" required value={lastName} 
            onChange={(event)=>setLastName(event.target.value)}/>
            </div>

            <div>
            <span>Email </span></div><div>
            <input type="email" className="input" placeholder="Email" required value={email} 
            onChange={(event)=>setEmail(event.target.value)}/>
            </div>

            <div>
            <span>Password </span></div>
            <div>
            <input type="password" className="input" placeholder="********" required  value={password}
             onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            <div>
            <span>Confirm Password </span></div><div>
            <input type="password" className="input" placeholder="********" required  value={confPassword}
             onChange={(event)=>setConfPassword(event.target.value)}/>
            </div>

            <div 
                style={{gap:"20px",            
                 justifyContent: "space-between",
                 display: "flex",
                 width: "400px"}}>
            <input type="checkbox" className="chkbx1" onChange={(event)=>setIsChecked(!isChecked)}/>
            <span>I accept the Terms of use & Privacy Policy</span>
            </div>
            <br/>
            <button type="submit" className="button" onClick={()=>{onclickRegisterHandleEvent(firstName,lastName,email,password,isChecked)}}>Register</button> 
           
        </div>
    )
}