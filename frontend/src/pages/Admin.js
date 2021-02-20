import React, { useState, useEffect } from "react";
import NavAdmin from "../components/Nav/NavAdmin";
import UserAdmin from "../components/Users/UserAdmin";
import profileFectch from "../lib/fetch/profile/profile-fetch";

function useFectchUsers() {
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [data, setData] = useState([]);
       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await profileFectch.findAll();
                     setData(data);
                     setLoading(false);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);
       return { data, loading, error };
}

export default function Admin() {
       const { data, loading, error } = useFectchUsers();

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
                            <NavAdmin></NavAdmin>
                            <br />
                            <br />
                            <div>
                                   <div className="container">
                                          <div className="row">
                                                 {data.map(function (
                                                        profile,
                                                        index
                                                 ) {
                                                        return (
                                                               <UserAdmin
                                                                      key={
                                                                             index
                                                                      }
                                                                      profile={
                                                                             profile
                                                                      }
                                                               ></UserAdmin>
                                                        );
                                                 })}
                                          </div>
                                   </div>
                            </div>
                     </div>
              );
       }

       if (error) {
              return (
                     <div
                            class="alert alert-danger alert-dismissible fade show"
                            role="alert"
                     >
                            <p>
                                   <strong>Error: </strong>
                                   {error.message}
                            </p>
                            <button
                                   type="button"
                                   class="close"
                                   data-dismiss="alert"
                                   aria-label="Close"
                            >
                                   <span aria-hidden="true">&times;</span>
                            </button>
                     </div>
              );
       }
}
