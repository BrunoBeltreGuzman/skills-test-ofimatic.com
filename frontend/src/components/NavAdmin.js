import React from "react";

export default function NavAdmin() {
       return (
              <div>
                     <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                   <div className="container">
                                          <a className="navbar-brand" href="/">
                                                 <i className="fas fa-users"></i>{" "}
                                                 Admin CRUD
                                          </a>
                                          <button
                                                 className="navbar-toggler"
                                                 type="button"
                                                 data-toggle="collapse"
                                                 data-target="#navbarNav"
                                                 aria-controls="navbarNav"
                                                 aria-expanded="false"
                                                 aria-label="Toggle navigation"
                                          >
                                                 <span className="navbar-toggler-icon"></span>
                                          </button>
                                          <div
                                                 className="collapse navbar-collapse"
                                                 id="navbarNav"
                                          >
                                                 <ul className="navbar-nav ml-auto">
                                                        <li className="nav-item dropdown">
                                                               <a
                                                                      className="nav-link dropdown-toggle"
                                                                      href="#"
                                                                      id="navbarDropdown"
                                                                      role="button"
                                                                      data-toggle="dropdown"
                                                                      aria-haspopup="true"
                                                                      aria-expanded="false"
                                                               >
                                                                      Users
                                                               </a>
                                                               <div
                                                                      className="dropdown-menu"
                                                                      aria-labelledby="navbarDropdown"
                                                               >
                                                                      <a
                                                                             className="dropdown-item"
                                                                             href="/links"
                                                                      >
                                                                             Add
                                                                             User
                                                                      </a>
                                                                      <div className="dropdown-divider"></div>
                                                                      <a
                                                                             className="dropdown-item"
                                                                             href="/links/add"
                                                                      >
                                                                             List
                                                                             Users
                                                                      </a>
                                                               </div>
                                                        </li>
                                                        <li className="nav-item">
                                                               <a
                                                                      className="nav-link"
                                                                      href="/profile"
                                                               >
                                                                      Profile
                                                               </a>
                                                        </li>
                                                        <li className="nav-item">
                                                               <a
                                                                      className="nav-link"
                                                                      href="/logout"
                                                               >
                                                                      Logout
                                                               </a>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                            </nav>
                     </div>
              </div>
       );
}
