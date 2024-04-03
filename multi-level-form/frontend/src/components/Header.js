import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const handleFetch=()=>{
    
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="">Add Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={handleFetch} to="/getData">Find Users</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
