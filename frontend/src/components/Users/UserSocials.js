import React, { useState, useEffect } from "react";
import UserProfile from "./UserProfile";
import profileFectch from "../../lib/fetch/profile/profile-fetch";
import localSign from "../../lib/localSign/LocalSign";
import Loading from "../Partials/Loading";
import Error from "../Partials/Error";

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

export default function UserSocials() {
       if (!localSign.getToken()) {
              window.location.href = "/signin";
       }
       const { data, loading, error, setData } = useFectchUsers();

       if (loading) {
              return <Loading></Loading>;
       }

       const intro = {
              height: "100vh",
              color: "#fff",
              backgroundColor: "rgb(15, 15, 15)",

              fontFamily: "Roboto",
       };

       if (data) {
              return (
                     <div>
                            {data.map(function (profile, index) {
                                   return (
                                          <div id="" style={intro}>
                                                 <br />
                                                 <br />
                                                 <div className="container container-fluid text-center ">
                                                        <div className="row">
                                                               <div className="col-md-3"></div>
                                                               <div className="col-md-6">
                                                                      <div className="card text-dark mycard">
                                                                             <div className="card-body">
                                                                                    <UserProfile
                                                                                           key={
                                                                                                  index
                                                                                           }
                                                                                           user={
                                                                                                  profile.user
                                                                                           }
                                                                                    ></UserProfile>
                                                                             </div>
                                                                      </div>
                                                                      <br />
                                                                      <br />
                                                               </div>
                                                               <div className="col-md-3"></div>
                                                        </div>
                                                 </div>
                                          </div>
                                   );
                            })}
                     </div>
              );
       }

       if (error) {
              return <Error error={error}></Error>;
       }
}
