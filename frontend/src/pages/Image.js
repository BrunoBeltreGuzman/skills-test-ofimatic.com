import React from "react";
import imageFetch from "../lib/fetch/image/image-fetch";
import localSign from "../lib/localSign/LocalSign";
let file = null;

async function onFormSubmit(event) {
       event.preventDefault();
       try {
              const formData = new FormData();
              formData.append("image", file);
              formData.append("user", localSign.getUserId());
              const user = localSign.getUserId();
              const result = await imageFetch.submit(user, formData);
              console.log(result);
              if (result[0]) {
                     alert("Photo save successfully");
                     window.location.href = "/profile/" + user;
              } else {
                     alert(result.message);
              }
       } catch (error) {
              console.log(error);
              alert(
                     "Opp!, There was an error registering the user, " +
                            error.message
              );
       }
}

function onChange(e) {
       file = e.target.files[0];
}

export default function Image() {
       if (localSign.getRole() == "admin") {
              window.location.href = "/admin";
       }

       if (!localSign.getToken()) {
              window.location.href = "/signin";
       }

       return (
              <div>
                     <div className="container p-4">
                            <div className="row">
                                   <div className="col-md-8 mx-auto">
                                          <div className="card text-white bg-dark text-center signin">
                                                 <br /> <br />
                                                 <div className=" ">
                                                        <img
                                                               src={localSign.getPathImage()}
                                                               alt="Avatar"
                                                               className="avatar-0"
                                                        />
                                                 </div>
                                                 <br />
                                                 <h3 className="text-secondary">
                                                        Change Photo
                                                 </h3>
                                                 <div className="card-body">
                                                        <form
                                                               id="formImage"
                                                               onSubmit={
                                                                      onFormSubmit
                                                               }
                                                               encType="multipart/form-data"
                                                        >
                                                               <div className=" text-center">
                                                                      <input
                                                                             type="file"
                                                                             name="myImage"
                                                                             accept="image/*"
                                                                             onChange={
                                                                                    onChange
                                                                             }
                                                                             className="btn btn-light"
                                                                      />
                                                               </div>
                                                               <br />
                                                               <br />
                                                               <div className="col text-center mr-5">
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

                                                                      <button className="btn btn-success ml-5">
                                                                             <i className="fas fa-cloud-upload-alt"></i>{" "}
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

       return (
              <div className="container text-center">
                     <div className="row">
                            <div className="card bg bg-dark text-light">
                                   <div className="col-md-12 ">
                                          <img
                                                 src={localSign.getPathImage()}
                                                 alt="Avatar"
                                                 className="avatar-3"
                                          />
                                   </div>
                                   <div className="col-md-12">
                                          {" "}
                                          <form
                                                 id="formImage"
                                                 onSubmit={onFormSubmit}
                                                 encType="multipart/form-data"
                                          >
                                                 <h1>File Upload</h1>
                                                 <input
                                                        type="file"
                                                        name="myImage"
                                                        accept="image/*"
                                                        onChange={onChange}
                                                        className="btn btn-primary"
                                                 />
                                                 <button type="submit">
                                                        Upload
                                                 </button>
                                          </form>
                                   </div>{" "}
                            </div>
                     </div>
              </div>
       );
}
