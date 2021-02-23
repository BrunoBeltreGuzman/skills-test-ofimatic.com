import React, { useState, useEffect } from "react";
import { format } from "timeago.js";
import temUser from "../../lib/localSign/TemUser";
import imageFetch from "../../lib/fetch/image/image-fetch";
import localSign from "../../lib/localSign/LocalSign";
import Loading from "../Partials/Loading";
import Error from "../Partials/Error";

function useFectchImage(user) {
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [data, setData] = useState([]);
       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await imageFetch.findByUser(user);
                     setData(data);
                     setLoading(false);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);
       return { data, loading, error, setData };
}

async function updateUser(userId, userName, role) {
       temUser.saveTemUser(userId, userName, role);
       if (temUser.temGetUserId()) {
              window.location.href = "/confiprofile";
       } else {
              alert("error");
       }
}

export default function UserAdmin(props) {
       const { data, loading, error, setData } = useFectchImage(
              props.profile.user
       );
       if (!props.profile) {
              return <h1>Error Opps</h1>;
       } else {
              if (loading) {
                     return <Loading></Loading>;
              }
              if (data) {
                     let path = "";
                     if (data[0]) {
                            path = "http://localhost:2000/" + data[0].path;
                     } else {
                            path = "./img/avatar.png";
                     }

                     return (
                            <div className="col-md-3 ">
                                   <div className="card text-center">
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
                                                        <a
                                                               className="dropdown-item"
                                                               href={
                                                                      "/profile/" +
                                                                      props
                                                                             .profile
                                                                             .user
                                                               }
                                                        >
                                                               <i className="fas fa-user-cog"></i>{" "}
                                                               Profile
                                                        </a>
                                                        <button
                                                               className="dropdown-item"
                                                               onClick={async function () {
                                                                      await updateUser(
                                                                             props
                                                                                    .profile
                                                                                    .user,
                                                                             props
                                                                                    .profile
                                                                                    .name,
                                                                             props
                                                                                    .profile
                                                                                    .role
                                                                      );
                                                               }}
                                                        >
                                                               <i className="fas fa-user-edit"></i>{" "}
                                                               Update
                                                        </button>
                                                        <button
                                                               className="dropdown-item"
                                                               onClick={async function () {
                                                                      await updateUser(
                                                                             props
                                                                                    .profile
                                                                                    .user,
                                                                             props
                                                                                    .profile
                                                                                    .name,
                                                                             props
                                                                                    .profile
                                                                                    .role
                                                                      );
                                                               }}
                                                        >
                                                               <i className="fas fa-user-times"></i>{" "}
                                                               Delete
                                                        </button>
                                                 </div>
                                          </div>
                                          <br />
                                          <div className="">
                                                 <a href="">
                                                        <img
                                                               src={path}
                                                               alt="Avatar"
                                                               className="avatar-4"
                                                        />
                                                 </a>
                                          </div>
                                          <div className="card-body">
                                                 <h5 className="card-title">
                                                        {props.profile.name}
                                                 </h5>
                                                 <p className="card-text">
                                                        {props.profile.email}
                                                 </p>

                                                 {props.profile.blog ? (
                                                        <a
                                                               href={
                                                                      props
                                                                             .profile
                                                                             .blog
                                                               }
                                                               className="btn btn-sm btn-primary"
                                                        >
                                                               My Blog{" "}
                                                               <i className="fas fa-external-link-alt"></i>
                                                        </a>
                                                 ) : (
                                                        <div></div>
                                                 )}

                                                 <br />
                                                 <br />
                                                 <p className="text-secondary">
                                                        {format(
                                                               props.profile
                                                                      .createdAt
                                                        )}
                                                 </p>
                                                 <hr />
                                                 <div className="text-center">
                                                        {props.profile
                                                               .facebook !=
                                                               "" &&
                                                        props.profile
                                                               .facebook !=
                                                               null &&
                                                        props.profile
                                                               .facebook !=
                                                               "null" ? (
                                                               <a
                                                                      target="_blank"
                                                                      href={
                                                                             props
                                                                                    .profile
                                                                                    .facebook
                                                                      }
                                                                      className="btn btn-sm  btn-dark m-2"
                                                                      data-bs-toggle="tooltip"
                                                                      data-bs-placement="bottom"
                                                                      title="facebook"
                                                               >
                                                                      <div className="">
                                                                             <i className="m fab fa-facebook"></i>
                                                                      </div>
                                                               </a>
                                                        ) : (
                                                               <div></div>
                                                        )}

                                                        {props.profile
                                                               .linkedin !=
                                                               "" &&
                                                        props.profile
                                                               .linkedin !=
                                                               null &&
                                                        props.profile
                                                               .linkedin !=
                                                               "null" ? (
                                                               <a
                                                                      target="_blank"
                                                                      href={
                                                                             props
                                                                                    .profile
                                                                                    .linkedin
                                                                      }
                                                                      className="btn btn-sm  btn-dark m-2"
                                                                      data-bs-toggle="tooltip"
                                                                      data-bs-placement="bottom"
                                                                      title="linkedin"
                                                               >
                                                                      <div className="">
                                                                             <i className="m fab fa-linkedin"></i>
                                                                      </div>
                                                               </a>
                                                        ) : (
                                                               <div></div>
                                                        )}

                                                        {props.profile.github !=
                                                               "" &&
                                                        props.profile.github !=
                                                               null &&
                                                        props.profile.github !=
                                                               "null" ? (
                                                               <a
                                                                      target="_blank"
                                                                      href={
                                                                             props
                                                                                    .profile
                                                                                    .github
                                                                      }
                                                                      className="btn btn-sm  btn-dark m-2"
                                                                      data-bs-toggle="tooltip"
                                                                      data-bs-placement="bottom"
                                                                      title="linkedin"
                                                               >
                                                                      <div className="">
                                                                             <i className="fab fa-github-square"></i>
                                                                      </div>
                                                               </a>
                                                        ) : (
                                                               <div></div>
                                                        )}
                                                 </div>
                                          </div>
                                   </div>
                                   <br />
                            </div>
                     );
              }
       }
       if (error) {
              return <Error error={error}></Error>;
       }
}
