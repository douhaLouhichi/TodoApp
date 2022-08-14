import React from "react"
import { useNavigate } from "react-router-dom";

export function Home():JSX.Element{

    const navigate = useNavigate();
    
 
    return (
        <div >
            Taskify
        </div>
    )
}