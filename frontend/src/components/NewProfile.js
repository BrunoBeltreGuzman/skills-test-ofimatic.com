import React from "react";

export default function NewProfile(props) {
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
                                          <a className="dropdown-item" href="#">
                                                 <i className="fas fa-user-cog"></i>
                                                 Profile
                                          </a>
                                          <a className="dropdown-item" href="#">
                                                 <i className="fas fa-user-edit"></i>
                                                 Update
                                          </a>
                                          <a className="dropdown-item" href="#">
                                                 <i className="fas fa-user-times"></i>
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
                                   <h5 className="card-title">sa</h5>
                                   <p className="card-text">sa</p>
                                   <a
                                          href="#"
                                          className="btn btn-sm btn-primary"
                                   >
                                          My Blog{" "}
                                          <i className="fas fa-external-link-alt"></i>
                                   </a>
                                   <br />
                                   <br />
                                   <p className="text-secondary">
                                          hace una hora
                                   </p>
                                   <hr />
                                   <div className="text-center">
                                          <button
                                                 className="btn btn-sm btn-dark"
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="facebook"
                                          >
                                                 {" "}
                                                 <i className="fab fa-facebook"></i>{" "}
                                          </button>

                                          <button
                                                 className="btn btn-sm  btn-dark m-3"
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="linkedin"
                                          >
                                                 <i className="fab fa-linkedin"></i>
                                          </button>

                                          <button
                                                 className="btn btn-sm  btn-dark"
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="github"
                                          >
                                                 <i className="fab fa-github-square"></i>
                                          </button>
                                   </div>
                            </div>
                     </div>
                     <br />
              </div>
       );
}
