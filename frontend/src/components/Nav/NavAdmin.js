import React from "react";
import localSign from "../../lib/localSign/LocalSign";
import temUser from "../../lib/localSign/TemUser";

function logOut() {
       localSign.deleteCredencials();
       temUser.temDeleteCredencials();
       window.location.href = "/";
}

export default function NavAdmin() {
       return (
              <div>
                     <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                   <div className="container">
                                          <a
                                                 className="navbar-brand"
                                                 href="/admin"
                                          >
                                                 <i className="fas fa-users"></i>{" "}
                                                 Admin
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
                                                                             href="/signup"
                                                                      >
                                                                             <i class="fas fa-user-plus"></i>{" "}
                                                                             Add
                                                                             User
                                                                      </a>
                                                                      <div className="dropdown-divider"></div>
                                                                      <a
                                                                             className="dropdown-item"
                                                                             href="/admin"
                                                                      >
                                                                             <i class="fas fa-users-cog"></i>{" "}
                                                                             List
                                                                             Users
                                                                      </a>
                                                               </div>
                                                        </li>
                                                        <li className="nav-item">
                                                               <button
                                                                      className="btn btn-link nav-link"
                                                                      onClick={
                                                                             logOut
                                                                      }
                                                               >
                                                                      Logout{" "}
                                                                      <i class="fas fa-sign-out-alt"></i>
                                                               </button>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                            </nav>
                     </div>
              </div>
       );
}
