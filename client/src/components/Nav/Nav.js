import React from "react";
import "./Nav.css";
import Auth from "../../utils/auth"

function Nav() {
 return (
     
    <div className="topnav">
          <a className="active" href="/">Home</a>
            {
              Auth.loggedIn() ?
                <a href="/" onClick={() => Auth.logout()}>Logout</a>
                :
                <a href="/login">Log In</a>
            }
            {
              Auth.loggedIn() ?
              <a href="/">Sign up</a>
                :
                <a href="/signup">Sign up</a>
            }
            {
              Auth.loggedIn() ?
              <a href="/schedule">Schedule</a>
                :
                <a href="/">Schedule</a>
            }
            {
              Auth.loggedIn() ?
              <a href="/myAppointment">My Appointment</a>
                :
                null
            }
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        )
    }
export default Nav;