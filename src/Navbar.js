import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav>
           <div className="logo">
           <i className="fab fa-artstation"></i>
            <h1>deviceChecker</h1>
           </div>

         <Link to="/login"> <button>logout</button></Link>  
        </nav>
    )
}

export default Navbar
