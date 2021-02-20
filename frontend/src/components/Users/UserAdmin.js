import React from "react";
import { format, render, cancel, register } from "timeago.js";

export default function UserAdmin(props) {
       if (!props.profile) {
              return <h1>Error Opps</h1>;
       } else {
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
                                                               props.profile
                                                                      .user
                                                        }
                                                 >
                                                        <i className="fas fa-user-cog"></i>{" "}
                                                        Profile
                                                 </a>
                                                 <a
                                                        className="dropdown-item"
                                                        href="#"
                                                 >
                                                        <i className="fas fa-user-edit"></i>{" "}
                                                        Update
                                                 </a>
                                                 <a
                                                        className="dropdown-item"
                                                        href="#"
                                                 >
                                                        <i className="fas fa-user-times"></i>{" "}
                                                        Delete
                                                 </a>
                                          </div>
                                   </div>
                                   <br />
                                   <div className="">
                                          <a href="">
                                                 <img
                                                        src="./img/avatar.png"
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
                                                               props.profile
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
                                                        props.profile.createdAt
                                                 )}
                                          </p>
                                          <hr />
                                          <div className="text-center">
                                                 {props.profile.facebook ? (
                                                        <a
                                                               className="btn btn-sm btn-dark m-2"
                                                               data-bs-toggle="tooltip"
                                                               data-bs-placement="bottom"
                                                               title="facebook"
                                                        >
                                                               {" "}
                                                               <i className="fab fa-facebook"></i>{" "}
                                                        </button>
                                                 ) : (
                                                        <div></div>
                                                 )}
                                                 {props.profile.linkedin ? (
                                                        <button
                                                               className="btn btn-sm  btn-dark m-2"
                                                               data-bs-toggle="tooltip"
                                                               data-bs-placement="bottom"
                                                               title="linkedin"
                                                        >
                                                               <i className="fab fa-linkedin"></i>
                                                        </button>
                                                 ) : (
                                                        <span></span>
                                                 )}

                                                 {props.profile.github ? (
                                                        <button
                                                               className="btn btn-sm  btn-dark m-2"
                                                               data-bs-toggle="tooltip"
                                                               data-bs-placement="bottom"
                                                               title="github"
                                                        >
                                                               <i className="fab fa-github-square"></i>
                                                        </button>
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
