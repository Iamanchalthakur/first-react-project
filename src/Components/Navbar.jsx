import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <div className="nav-bar">
          
            <div className="logo">
              <img src="logo512.png" alt="logo" />
            </div>

            <div className="elements">
            <nav>
              <ul>
                <span>
                  <Link className="nav-el" to="/">
                    Home
                  </Link>
                </span>

                <span>
                  {" "}
                  <Link className="nav-el" to="/AboutUs">
                    AboutUs
                  </Link>
                </span>

                <span>
                  {" "}
                  <Link className="nav-el" to="/Services">
                    Services
                  </Link>
                </span>

                <span>
                  {" "}
                  <Link className="nav-el" to="/Contact">
                    Contact
                  </Link>
                </span>
              </ul>
              </nav>
            </div>
          
        </div>
      </header>
    </>
  );
}

export default Navbar;
