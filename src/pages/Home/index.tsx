import React from "react"
import { useNavigate } from "react-router-dom";

export function Home():JSX.Element{

    const navigate = useNavigate();
    
 
    return (
        <div >
            <button className="button1" onClick={()=>navigate("/login")}><h2>Login</h2></button><br/>
            <button className="button1" onClick={()=>navigate("/register")}><h2>Register</h2></button>
        </div>
    )
}