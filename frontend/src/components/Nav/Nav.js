import React from "react";

export default function Nav() {
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
                                                        <li className="nav-item">
                                                               <a
                                                                      className="nav-link btn btn-primary"
                                                                      href="/admin"
                                                               >
                                                                      <i className="fas fa-user-check"></i>
                                                                      &nbsp;Get
                                                                      Started
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
