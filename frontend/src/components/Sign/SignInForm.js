import React from "react";

export default function SignInBody() {
       return (
              <div>
                     <div className="container p-4">
                            <div className="row">
                                   <div className="col-md-4 mx-auto">
                                          <div className="card text-white bg-dark text-center signin">
                                                 <br /> <br />
                                                 <h3 className="display-4">
                                                        SignIn
                                                 </h3>
                                                 <p className="text-secondary">
                                                        Get Started
                                                 </p>
                                                 <br />
                                                 <div className="card-body">
                                                        <form>
                                                               <div className="form-group">
                                                                      <input
                                                                             type="email"
                                                                             name="email"
                                                                             placeholder="Email "
                                                                             className="form-control"
                                                                             required="text"
                                                                             autoFocus
                                                                      />
                                                               </div>
                                                               <br />
                                                               <div className="form-group">
                                                                      <input
                                                                             type="password"
                                                                             name="password"
                                                                             placeholder="Password"
                                                                             className="form-control"
                                                                             required="text"
                                                                      />
                                                               </div>
                                                               <br />
                                                               <br />
                                                               <div className="col text-center">
                                                                      <button className="btn btn-primary w-50">
                                                                             {" "}
                                                                             <i className="fas fa-sign-in-alt"></i>{" "}
                                                                             SingIn
                                                                      </button>
                                                               </div>
                                                               <br /> <br />
                                                        </form>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
