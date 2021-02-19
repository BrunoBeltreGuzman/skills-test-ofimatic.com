import React from "react";

export default function IndexBody() {
       return (
              <div>
                     <div className="container">
                            <div className="text text-center">
                                   <h1 className="display-1">
                                          <i className="fas fa-users"></i> Admin
                                          CRUD
                                   </h1>
                                   <h1 className="display-5">
                                          Create Reead Update and Delete your
                                          records!
                                   </h1>
                            </div>
                            <br />
                            <br />
                            <div className="row text-center">
                                   <div className="col-md-3"></div>
                                   <div className="col-md-6 p-5">
                                          <a
                                                 className="btn btn-success float-left"
                                                 href="/signup"
                                          >
                                                 <i className="fas fa-user-plus"></i>
                                                 &nbsp;SignUp
                                          </a>
                                          <a
                                                 className="btn btn-secondary float-right"
                                                 href="/signin"
                                          >
                                                 <i className="fas fa-sign-in-alt"></i>
                                                 &nbsp; SignIn
                                          </a>
                                   </div>
                                   <div className="col-md-3"></div>
                            </div>
                     </div>
              </div>
       );
}
