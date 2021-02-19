import React, { useState, useEffect } from "react";
import NavAdmin from "../components/NavAdmin";
import UsersAdmin from "../components/Users/UsersAdmin";
import FectUsers from "../lib/users/FectUsers";
import Index from "./Index";

function useFectUsers() {
       const fectUsers = new FectUsers();
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [data, setData] = useState([]);
       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await fectUsers.findAll();
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
       const { data, loading, error } = useFectUsers();

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
                                                        user,
                                                        index
                                                 ) {
                                                        return (
                                                               <UsersAdmin
                                                                      key={
                                                                             index
                                                                      }
                                                                      user={
                                                                             user
                                                                      }
                                                               ></UsersAdmin>
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
                     <div className="container">
                            <h1 className="alert-danger">
                                   Error: {error.message}
                            </h1>
                     </div>
              );
       }

       return (
              <div>
                     <NavAdmin></NavAdmin>
                     <br />
                     <br />
                     <div className="container">
                            <div className="row">
                                   <UsersAdmin></UsersAdmin>
                            </div>
                     </div>
              </div>
       );
}
