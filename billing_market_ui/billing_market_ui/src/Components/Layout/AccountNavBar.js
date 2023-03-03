import React from 'react'
import { NavLink } from 'react-router-dom'

function AccountNavBar() {
  return (
    <>  
         <center><u><h1>Accountant Dashboard</h1></u></center>
         <br/>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/accountant/report">REPORT<span className="sr-only"></span></NavLink>

            <NavLink className="nav-item nav-link disabled" to="#"></NavLink>
            </div>
        </div>
        </nav>
    </>
  )
}

export default AccountNavBar