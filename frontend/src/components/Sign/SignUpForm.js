import React from "react";
import localSign from "../../lib/localSign/LocalSign";
import signFetch from "../../lib/fetch/sign/sing-fetch";

async function singUp(event) {
       try {
              event.preventDefault();
              const name = event.target.name.value;
              const email = event.target.email.value;
              const password = event.target.password.value;
              console.log(name, email, password);

              const data = await signFetch.signup(name, email, password);
              console.log(data);

              if (data.insertId) {
                     resetForm(1500);
                     alert("SingUp successfully");
                     await resetForm(1500);
                     if (localSign.getRole() == "admin") {
                            window.location.href = "/admin";
                     } else {
                            if (localSign.getRole() != "admin") {
                                   window.location.href = "/signin";
                            }
                     }
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
              document.getElementById("signInForm").reset();
       }, time);
}

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
                                                                             src="https://picsum.photos/1080/1080"
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
                                                                      <form
                                                                             onSubmit={
                                                                                    singUp
                                                                             }
                                                                             id="signUpForm"
                                                                      >
                                                                             <div className="form-group">
                                                                                    <input
                                                                                           type="type"
                                                                                           name="name"
                                                                                           id="name"
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
                                                                                           id="email"
                                                                                           placeholder="Email"
                                                                                           className="form-control"
                                                                                           required="email"
                                                                                    />
                                                                             </div>
                                                                             <div className="form-group">
                                                                                    <input
                                                                                           type="password"
                                                                                           name="password"
                                                                                           id="password"
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
