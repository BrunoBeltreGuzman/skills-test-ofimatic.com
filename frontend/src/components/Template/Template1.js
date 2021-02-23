import React from "react";

export default function UserProfile(props) {
       const data = props.data;
       const path = props.path;

       const avatar2 = {
              verticalAlign: "middle",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
       };

       const textProfile = {
              fontSize: "22px",
       };

       const subra = {
              textDecoration: "underline rgb(30, 30, 30)",
       };

       const socials = {
              fontSize: "30px",
       };

       return (
              <div>
                     <div className="row">
                            <div className="col-md-4">
                                   <div className="">
                                          <a target="_blank" href="">
                                                 <img
                                                        src={path}
                                                        alt="Avatar"
                                                        style={avatar2}
                                                 />
                                          </a>
                                   </div>
                                   <br />
                            </div>
                            <div className="col-md-8 text-left">
                                   <div className="row">
                                          <div className="col-md-9">
                                                 <h3 className="">
                                                        {data.name != "" &&
                                                        data.name != null &&
                                                        data.name != "null" ? (
                                                               <strong>
                                                                      {
                                                                             data.name
                                                                      }
                                                               </strong>
                                                        ) : (
                                                               <span></span>
                                                        )}
                                                 </h3>
                                                 {data.work != "" &&
                                                 data.work != null &&
                                                 data.work != "null" ? (
                                                        <h6 className="text-secondary">
                                                               <strong>
                                                                      <i className="fas fa-briefcase"></i>{" "}
                                                                      {
                                                                             data.work
                                                                      }
                                                               </strong>
                                                        </h6>
                                                 ) : (
                                                        <span></span>
                                                 )}

                                                 {data.pais != "" &&
                                                 data.pais != null &&
                                                 data.pais != "null" ? (
                                                        <h6 className="text-secondary">
                                                               <i className="fas fa-map-marker-alt"></i>{" "}
                                                               {data.pais}
                                                        </h6>
                                                 ) : (
                                                        <span></span>
                                                 )}

                                                 {data.blog != "" &&
                                                 data.blog != null &&
                                                 data.blog != "null" ? (
                                                        <a
                                                               target="_blank"
                                                               href={data.blog}
                                                               className="btn btn-sm btn-primary"
                                                        >
                                                               View my blog{" "}
                                                               <i className="fas fa-external-link-alt"></i>
                                                        </a>
                                                 ) : (
                                                        <span></span>
                                                 )}
                                          </div>
                                          <div className="col-md-3">
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
                                                                      <a className="dropdown-item">
                                                                             <span className="feedback">
                                                                                    &#128077;
                                                                             </span>
                                                                             Like
                                                                      </a>
                                                                      <a className="dropdown-item">
                                                                             <span className="feedback">
                                                                                    &#128078;
                                                                             </span>
                                                                             DisLike
                                                                      </a>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <div>
                            <br />
                            {data.descripcion != "" &&
                            data.descripcion != null &&
                            data.descripcion != "null" ? (
                                   <p className="text-left" style={textProfile}>
                                          {data.descripcion}
                                   </p>
                            ) : (
                                   <span></span>
                            )}

                            <div className="row">
                                   <div className="col-md-6">
                                          {data.work != "" &&
                                          data.work != null &&
                                          data.work != "null" ? (
                                                 <div>
                                                        <h6 style={subra}>
                                                               <strong>
                                                                      Work
                                                               </strong>
                                                        </h6>

                                                        <h6 className="">
                                                               <strong>
                                                                      <i className="fas fa-briefcase"></i>{" "}
                                                                      {
                                                                             data.work
                                                                      }
                                                               </strong>
                                                        </h6>
                                                 </div>
                                          ) : (
                                                 <span></span>
                                          )}
                                   </div>
                                   <div className="col-md-6">
                                          {data.skill != "" &&
                                          data.skill != null &&
                                          data.skill != "null" ? (
                                                 <div>
                                                        <h6 style={subra}>
                                                               <strong>
                                                                      Skill
                                                               </strong>
                                                        </h6>

                                                        <h6 className="">
                                                               <strong>
                                                                      <i className="fas fa-dot-circle"></i>{" "}
                                                                      {
                                                                             data.skill
                                                                      }
                                                               </strong>
                                                        </h6>
                                                 </div>
                                          ) : (
                                                 <span></span>
                                          )}
                                   </div>
                            </div>
                            <br />
                            <div className="text-center">
                                   {data.facebook != "" &&
                                   data.facebook != null &&
                                   data.facebook != "null" ? (
                                          <a
                                                 target="_blank"
                                                 href={data.facebook}
                                                 className="btn btn-sm btn-light socials"
                                                 style={socials}
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
                                   {data.linkedin != "" &&
                                   data.linkedin != null &&
                                   data.linkedin != "null" ? (
                                          <a
                                                 target="_blank"
                                                 href={data.linkedin}
                                                 className="btn btn-sm btn-light socials"
                                                 style={socials}
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="linkedin"
                                          >
                                                 <i className="fab fa-linkedin"></i>
                                          </a>
                                   ) : (
                                          <span></span>
                                   )}
                                   {data.github != "" &&
                                   data.github != null &&
                                   data.github != "null" ? (
                                          <a
                                                 target="_blank"
                                                 href={data.github}
                                                 className="btn btn-sm btn-light socials"
                                                 style={socials}
                                                 data-bs-toggle="tooltip"
                                                 data-bs-placement="bottom"
                                                 title="github"
                                          >
                                                 <i className="fab fa-github-square"></i>
                                          </a>
                                   ) : (
                                          <span></span>
                                   )}
                                   <br /> <br />
                                   {data.email != "" &&
                                   data.email != null &&
                                   data.email != "null" ? (
                                          <h6>
                                                 <strong>{data.email}</strong>
                                          </h6>
                                   ) : (
                                          <span></span>
                                   )}
                                   {data.telefono != "" &&
                                   data.telefono != null &&
                                   (data.telefono != "null") != "" ? (
                                          <h6>{data.telefono}</h6>
                                   ) : (
                                          <div></div>
                                   )}
                                   <br />
                            </div>
                     </div>
                     <div>
                            <p className="text-secondary">
                                   © Admin CRUD 2021 - All Copyright Reserved
                            </p>
                     </div>
              </div>
       );
}
