import React, { useState, useEffect } from "react";
import profileFectch from "../../lib/fetch/profile/profile-fetch";
import AllSkills from "../skills/AllSkills";
import AllWorks from "../Works/AllWorks";

function useFectchProfile(id) {
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [data, setData] = useState([]);
       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await profileFectch.findById(id);
                     setData(data[0]);
                     setLoading(false);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);
       return { data, loading, error };
}
export default function UserProfile(props) {
       const { data, loading, error } = useFectchProfile(props.user);

       const avatar2 = {
              verticalAlign: "middle",
              width: "130px",
              height: "130px",
              borderRadius: "50%",
       };

       const textProfile = {
              fontSize: "22px",
       };

       const socials = {
              fontSize: "30px",
       };

       if (loading) {
              return (
                     <div className="container">
                            <h1>Loading....</h1>
                     </div>
              );
       }

       if (data) {
              return (
                     <div>
                            <div className="row">
                                   <div className="col-md-4">
                                          <div className="">
                                                 <a target="_blank" href="">
                                                        <img
                                                               src="../img/avatar.png"
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
                                                               <strong>
                                                                      {
                                                                             data.name
                                                                      }
                                                               </strong>
                                                        </h3>
                                                        {data.work != "" ? (
                                                               <h6 className="text-secondary">
                                                                      <strong>
                                                                             <i className="fas fa-briefcase"></i>{" "}
                                                                             {
                                                                                    data.work
                                                                             }
                                                                      </strong>
                                                               </h6>
                                                        ) : (
                                                               <div></div>
                                                        )}

                                                        {data.pais != "" ? (
                                                               <h6 className="text-secondary">
                                                                      <i className="fas fa-map-marker-alt"></i>{" "}
                                                                      {
                                                                             data.pais
                                                                      }
                                                               </h6>
                                                        ) : (
                                                               <div></div>
                                                        )}

                                                        {data.blog != "" ? (
                                                               <a
                                                                      target="_blank"
                                                                      href={
                                                                             data.blog
                                                                      }
                                                                      className="btn btn-sm btn-primary"
                                                               >
                                                                      View my
                                                                      blog{" "}
                                                                      <i className="fas fa-external-link-alt"></i>
                                                               </a>
                                                        ) : (
                                                               <div></div>
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
                                                                             <a
                                                                                    target="_blank"
                                                                                    className="dropdown-item"
                                                                                    href="#"
                                                                             >
                                                                                    <span className="feedback">
                                                                                           &#128077;
                                                                                    </span>
                                                                                    Like
                                                                             </a>
                                                                             <a
                                                                                    target="_blank"
                                                                                    className="dropdown-item"
                                                                                    href="#"
                                                                             >
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
                                   {data.descripcion != "" ? (
                                          <p
                                                 className="text-left"
                                                 style={textProfile}
                                          >
                                                 {data.descripcion}
                                          </p>
                                   ) : (
                                          <div></div>
                                   )}

                                   <div className="row">
                                          <div className="col-md-6">
                                                 {data.user ? (
                                                        <AllWorks
                                                               user={data.user}
                                                        ></AllWorks>
                                                 ) : (
                                                        <div></div>
                                                 )}
                                          </div>
                                          <div className="col-md-6">
                                                 {data.user ? (
                                                        <AllSkills
                                                               user={data.user}
                                                        ></AllSkills>
                                                 ) : (
                                                        <div></div>
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
                                          {data.email != "" ? (
                                                 <h6>
                                                        <strong>
                                                               bruno@gmail.com
                                                        </strong>
                                                 </h6>
                                          ) : (
                                                 <span></span>
                                          )}
                                          {data.telefono != "" ? (
                                                 <h6>809-564-6541</h6>
                                          ) : (
                                                 <div></div>
                                          )}
                                          <br />
                                   </div>
                            </div>
                            <div>
                                   <p className="text-secondary">
                                          © Admin CRUD 2021 - All Copyright
                                          Reserved
                                   </p>
                            </div>
                     </div>
              );
       }
       if (error) {
              return (
                     <div className="container">
                            <h1 className="alert-danger">
                                   Error: {error.message}
                            </h1>
                     </div>
              );
       }
}
