import React, { useState, useEffect } from "react";

import worksFectch from "../../lib/fetch/works/works-fetch";

function useFectchWorks(user) {
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [data, setData] = useState([]);
       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await worksFectch.findByUser(user);
                     setData(data);
                     setLoading(false);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);
       return { data, loading, error };
}

export default function AllWorks(props) {
       const { data, loading, error } = useFectchWorks(props.user);

       const subra = {
              textDecoration: "underline rgb(30, 30, 30)",
       };

       if (loading) {
              return <p>Loading....</p>;
       }

       if (data) {
              return (
                     <div>
                            {data.length > 0 ? (
                                   <div>
                                          <div>
                                                 <h6 style={subra}>
                                                        <strong>Work</strong>
                                                 </h6>
                                          </div>
                                          {data.map(function (work, index) {
                                                 return (
                                                        <li key={index}>
                                                               {work.work}
                                                        </li>
                                                 );
                                          })}
                                   </div>
                            ) : (
                                   <div></div>
                            )}
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
