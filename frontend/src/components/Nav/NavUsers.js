import React from "react";
import localSign from "../../lib/localSign/LocalSign";

function logOut() {
       localSign.deleteCredencials();
       window.location.href = "/";
}

export default function NavUsers() {
       return (
              <div>
                     <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                   <div className="container">
                                          <a className="navbar-brand" href="/">
                                                 <i className="fas fa-users"></i>{" "}
                                                 Socials
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
                                                               <button
                                                                      className="btn btn-link nav-link"
                                                                      onClick={
                                                                             logOut
                                                                      }
                                                               >
                                                                      Logout
                                                               </button>
                                                        </li>
                                                        <li className="nav-item">
                                                               <a
                                                                      className="nav-link"
                                                                      href={
                                                                             "/profile/" +
                                                                             localSign.getUserId()
                                                                      }
                                                               >
                                                                      Profile
                                                               </a>
                                                        </li>
                                                        <li className="nav-item">
                                                               <div className="">
                                                                      <a
                                                                             href={
                                                                                    "/profile/" +
                                                                                    localSign.getUserId()
                                                                             }
                                                                      >
                                                                             <img
                                                                                    src="./img/avatar.png"
                                                                                    alt="Avatar"
                                                                                    className="avatar-nav"
                                                                             />
                                                                      </a>
                                                               </div>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                            </nav>
                     </div>
              </div>
       );
}
