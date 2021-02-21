import React, { useState, useEffect } from "react";
import NavAdmin from "../components/Nav/NavAdmin";
import UserAdmin from "../components/Users/UserAdmin";
import profileFectch from "../lib/fetch/profile/profile-fetch";
import localSign from "../lib/localSign/LocalSign";
import Loading from "../components/Partials/Loading";
import Error from "../components/Partials/Error";

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
       return { data, loading, error, setData };
}

export default function Admin() {
       if (!localSign.getToken()) {
              window.location.href = "/signin";
       }
       const { data, loading, error, setData } = useFectchUsers();

       if (loading) {
              return <Loading></Loading>;
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
                                                                      setData={
                                                                             setData
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
              return <Error error={error}></Error>;
       }
}
