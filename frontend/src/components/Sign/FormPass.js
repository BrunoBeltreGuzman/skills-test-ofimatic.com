import React from "react";
import usersFetch from "../../lib/fetch/users/users-fetch";
import localSign from "../../lib/localSign/LocalSign";

async function changePassword(event) {
       try {
              event.preventDefault();
              const user = localSign.getUserId();
              const password = event.target.password.value;
              const newPassword = event.target.newPassword.value;
              const data = await usersFetch.changePassword(
                     user,
                     password,
                     newPassword
              );
              console.log(data);
              if (data.affectedRows >= 1 || data.changedRows >= 1) {
                     alert("Password save successfully");
                     await resetForm(1500);
                     window.location.href = "/home";
              } else {
                     alert(data.message);
              }
       } catch (error) {
              console.log(error);
              alert(
                     "Opp!, There was an error registering the user, " +
                            error.message
              );
       }
}

async function resetForm(time) {
       setTimeout(() => {
              document.getElementById("passwordForm").reset();
       }, time);
}

export default function FormPass() {
       return (
              <div>
                     <div className="container p-4">
                            <div className="row">
                                   <div className="col-md-4 mx-auto">
                                          <div className="card text-white bg-dark text-center signin">
                                                 <br /> <br />
                                                 <h1>Password</h1>
                                                 <p className="text-secondary">
                                                        Change Password
                                                 </p>
                                                 <h5>
                                                        Username:{" "}
                                                        {localSign.getUserName()}
                                                 </h5>
                                                 <div className="card-body">
                                                        <form
                                                               onSubmit={
                                                                      changePassword
                                                               }
                                                               id="passwordForm"
                                                        >
                                                               <div className="form-group">
                                                                      <input
                                                                             type="password"
                                                                             name="password"
                                                                             id="password"
                                                                             placeholder="Password "
                                                                             className="form-control"
                                                                             required="text"
                                                                             autoFocus
                                                                      />
                                                               </div>
                                                               <br />
                                                               <div className="form-group">
                                                                      <input
                                                                             type="password"
                                                                             name="newPassword"
                                                                             id="newPassword"
                                                                             placeholder="New Password"
                                                                             className="form-control"
                                                                             required="text"
                                                                      />
                                                               </div>
                                                               <br />
                                                               <br />
                                                               <div className="col text-center">
                                                                      <button className="btn btn-danger">
                                                                             <i class="fas fa-key"></i>{" "}
                                                                             Change
                                                                      </button>
                                                               </div>
                                                               <br />
                                                               <div id="result"></div>
                                                               <br />
                                                        </form>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
