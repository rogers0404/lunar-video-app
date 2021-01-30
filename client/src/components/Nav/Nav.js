import React from "react";
import "./Nav.css";
import Auth from "../../utils/auth"

function Nav() {
 return (
     
    <div className="topnav">
          <a className="active" href="/">Home</a>
            {
              Auth.loggedIn() ?
                <a href="/logout" onClick={() => Auth.logout()}>Logout</a>
                :
                <a href="/login">Log In</a>
            }
            {
              Auth.loggedIn() ?
              <a href="/signup">Sign up</a>
                :
                <a href="/signup" onclick={"return false;"}>Sign up</a>
            }
            {
              Auth.loggedIn() ?
              <a href="/schedule">Schedulle</a>
                :
                <a href="/" onclick={"return false;"}>Schedulle</a>
            }
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        )
    }
export default Nav;