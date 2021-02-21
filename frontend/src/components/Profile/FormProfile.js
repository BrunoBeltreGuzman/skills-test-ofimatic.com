import React, { useState, useEffect } from "react";
import localSign from "../../lib/localSign/LocalSign";
import infoFetch from "../../lib/fetch/info_users/info-fetch";
import ReactDOM from "react-dom";
import profileFectch from "../../lib/fetch/profile/profile-fetch";
import Socials from "./Socials";
import Informacion from "./Informacion";
import Contact from "./Contact";
import temUser from "../../lib/localSign/TemUser";
import deleteAccount from "../../lib/DeleteAccount/DeleteAccount";
import Loading from "../Partials/Loading";
import Error from "../Partials/Error";

async function deleteUser(user) {
       try {
              await deleteAccount(user);

              if (localSign.getRole() == "admin") {
                     window.location.href = "/admin";
              } else {
                     window.location.href = "/";
              }
       } catch (error) {
              alert(error.message);
       }
}

function useFectchProfile(user) {
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [data, setData] = useState([]);
       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await profileFectch.findById(user);
                     setData(data[0]);
                     setLoading(false);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);
       return { data, loading, error };
}

async function saveProfile(event) {
       event.preventDefault();
       try {
              event.preventDefault();
              const name = event.target.name.value;
              const email = event.target.email.value;

              //info
              const description = event.target.description.value;
              const trabajo = event.target.trabajo.value;
              const skill = event.target.skill.value;

              //contac
              const pais = event.target.pais.value;
              const telefono = event.target.telefono.value;

              //socials
              const blog = event.target.blog.value;
              const facebook = event.target.facebook.value;
              const linkedin = event.target.linkedin.value;
              const github = event.target.gitHub.value;
              let user = 0;

              if (localSign.getRole() == "admin") {
                     user = temUser.temGetUserId();
              } else {
                     user = localSign.getUserId();
              }

              console.log(user);

              const data = {
                     user,
                     name,
                     email,
                     description,
                     trabajo,
                     skill,
                     pais,
                     telefono,
                     blog,
                     facebook,
                     linkedin,
                     github,
              };
              const data2 = await infoFetch.insertData(data);
              console.log(data2);
              if (
                     data2.insertId > 0 ||
                     data2.affectedRows > 0 ||
                     data2.changedRows > 0
              ) {
                     alert("SingUp successfully");
                     await resetForm(1500);
                     window.location.href = "/profile/" + user;
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
              document.getElementById("profileForm").reset();
       }, time);
}

export default function FormProfile() {
       let user = 0;

       if (localSign.getRole() == "admin") {
              user = temUser.temGetUserId();
       } else {
              user = localSign.getUserId();
       }

       console.log(user);

       const { data, loading, error } = useFectchProfile(user);

       if (loading) {
              return <Loading></Loading>;
       }

       if (data) {
              return (
                     <div>
                            <div className="container">
                                   <div className="container ">
                                          <div className="card p-3">
                                                 <div className="row">
                                                        <div className="col">
                                                               <div className="text-right">
                                                                      <div className="col text-right dropdown ">
                                                                             <button
                                                                                    className="btn btn-light"
                                                                                    type="button"
                                                                                    id="dropdownMenuButton"
                                                                                    data-toggle="dropdown"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="false"
                                                                             >
                                                                                    <i className="fas fa-ellipsis-v"></i>
                                                                             </button>
                                                                             <div
                                                                                    className="dropdown-menu"
                                                                                    aria-labelledby="dropdownMenuButton"
                                                                             >
                                                                                    <button
                                                                                           className="dropdown-item"
                                                                                           onClick={async function () {
                                                                                                  deleteUser(
                                                                                                         data.user
                                                                                                  );
                                                                                           }}
                                                                                    >
                                                                                           <i className="fas fa-user-times"></i>{" "}
                                                                                           Delete
                                                                                           account
                                                                                    </button>
                                                                             </div>
                                                                      </div>
                                                               </div>
                                                        </div>
                                                 </div>
                                                 <form
                                                        id="profileForm"
                                                        onSubmit={saveProfile}
                                                 >
                                                        <div className="">
                                                               <a href="">
                                                                      <img
                                                                             src="./img/avatar.png"
                                                                             alt="Avatar"
                                                                             className="avatar-4"
                                                                      />
                                                               </a>
                                                               <br />
                                                               <br />
                                                        </div>
                                                        <div className="form-group">
                                                               <label htmlFor="name">
                                                                      Full Name
                                                               </label>
                                                               <input
                                                                      type="text"
                                                                      className="form-control"
                                                                      id="name"
                                                                      defaultValue={
                                                                             data.name
                                                                      }
                                                                      placeholder="Name"
                                                                      required="text"
                                                               />
                                                        </div>
                                                        <div className="form-group">
                                                               <label htmlFor="email">
                                                                      Email
                                                               </label>
                                                               <input
                                                                      type="email"
                                                                      className="form-control"
                                                                      id="email"
                                                                      defaultValue={
                                                                             data.email
                                                                      }
                                                                      placeholder="Email"
                                                                      required="email"
                                                               />
                                                               <small
                                                                      id="emailHelp"
                                                                      className="form-text text-muted"
                                                               >
                                                                      Email to
                                                                      signin
                                                               </small>
                                                        </div>
                                                        {localSign.getRole() ==
                                                        "admin" ? (
                                                               <span></span>
                                                        ) : (
                                                               <div>
                                                                      <a
                                                                             className="btn btn-link"
                                                                             href="/password"
                                                                      >
                                                                             Change
                                                                             password
                                                                      </a>
                                                               </div>
                                                        )}

                                                        <br />
                                                        <Informacion
                                                               data={data}
                                                        ></Informacion>
                                                        <Contact
                                                               data={data}
                                                        ></Contact>
                                                        <Socials
                                                               data={data}
                                                        ></Socials>
                                                        <br />

                                                        <div className="col text-center mr-5 ">
                                                               {localSign.getRole() ==
                                                               "admin" ? (
                                                                      <a
                                                                             href={
                                                                                    "/admin"
                                                                             }
                                                                             className="btn btn-secondary"
                                                                      >
                                                                             Cancel
                                                                      </a>
                                                               ) : (
                                                                      <a
                                                                             href={
                                                                                    "/home"
                                                                             }
                                                                             className="btn btn-secondary"
                                                                      >
                                                                             Cancel
                                                                      </a>
                                                               )}

                                                               <button
                                                                      type="submit"
                                                                      className="btn btn-primary ml-5"
                                                               >
                                                                      Save
                                                               </button>
                                                        </div>
                                                 </form>
                                          </div>
                                          <br />
                                          <br />
                                   </div>
                            </div>
                     </div>
              );
       }
       if (error) {
              return <Error error={error}></Error>;
       }
}
