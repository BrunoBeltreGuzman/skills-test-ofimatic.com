import React from "react";
import signFetch from "../../lib/fetch/sign/sing-fetch";
import ReactDOM from "react-dom";
import localSign from "../../lib/localSign/LocalSign";

async function singIn(event) {
       event.preventDefault();
       try {
              event.preventDefault();
              const email = event.target.email.value;
              const password = event.target.password.value;
              const data = await signFetch.signin(email, password);
              if (data.token) {
                     message("SingIn successfully");
                     await resetForm(1500);
                     localSign.saveCredencials(
                            data.user.id,
                            data.user.name,
                            data.token,
                            data.role[0].role
                     );
                     window.location.href = "/home";
              } else {
                     message(data.message);
              }
       } catch (error) {
              console.log(error);
              message(
                     "Opp!, There was an error registering the user, ",
                     error.message
              );
       }
}

function message(text) {
       alert(text);
}

function message2(text) {
       const result = document.getElementById("result");
       ReactDOM.render(<p>{text}</p>, result);
}

async function resetForm(time) {
       setTimeout(() => {
              document.getElementById("signInForm").reset();
       }, time);
}

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
                                                        <form
                                                               onSubmit={singIn}
                                                               id="signInForm"
                                                        >
                                                               <div className="form-group">
                                                                      <input
                                                                             type="email"
                                                                             name="email"
                                                                             id="email"
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
                                                                             id="password"
                                                                             placeholder="Password"
                                                                             className="form-control"
                                                                             required="text"
                                                                      />
                                                               </div>
                                                               <br />
                                                               <br />
                                                               <div className="col text-center">
                                                                      <button className="btn btn-primary">
                                                                             <i className="fas fa-sign-in-alt"></i>{" "}
                                                                             SingIn
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
