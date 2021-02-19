import React from "react";

export default function SignUpForm() {
       return (
              <div>
                     <div className="container p-4">
                            <div className="row">
                                   <div className="col-md-10 mx-auto">
                                          <div className="card text-center signup">
                                                 <div className="card-body">
                                                        <div className="row">
                                                               <div className="col-md-7">
                                                                      <img
                                                                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN4blPCs3ETLPQGOXYfqrZGf1LNZw8-R23lw&usqp=CAU"
                                                                             className="imaSignUp"
                                                                      />
                                                               </div>

                                                               <div className="col-md-5">
                                                                      <br />
                                                                      <br />
                                                                      <h3 className="display-4">
                                                                             SignUp
                                                                      </h3>
                                                                      <p className="text-secondary">
                                                                             Started
                                                                             Account
                                                                      </p>
                                                                      <br />
                                                                      <form>
                                                                             <div className="form-group">
                                                                                    <input
                                                                                           type="type"
                                                                                           name="name"
                                                                                           placeholder="Name"
                                                                                           className="form-control"
                                                                                           required="text"
                                                                                           autoFocus
                                                                                    />
                                                                             </div>
                                                                             <div className="form-group">
                                                                                    <input
                                                                                           type="email"
                                                                                           name="username"
                                                                                           placeholder="Email"
                                                                                           className="form-control"
                                                                                           required="email"
                                                                                    />
                                                                             </div>
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
                                                                             <div className="col text-center">
                                                                                    <button className="btn btn-success">
                                                                                           {" "}
                                                                                           <i className="fas fa-user-plus"></i>{" "}
                                                                                           SingUp
                                                                                    </button>
                                                                             </div>
                                                                      </form>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
