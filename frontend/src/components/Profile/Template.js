import React, { useState, useEffect } from "react";

export default function Template(props) {
       const data = props.data;

       useEffect(async function () {
              const element = document.getElementById("template");
              element.value = data.template;
       }, []);

       return (
              <div>
                     <div id="accordion">
                            <div className="card">
                                   <div
                                          className="card-header"
                                          id="headingThree2"
                                   >
                                          <h5 className="mb-0">
                                                 <a
                                                        className="btn btn-light collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseUrl2"
                                                        aria-expanded="false"
                                                        aria-controls="collapseUrl2"
                                                 >
                                                        Template{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                 </a>
                                          </h5>
                                   </div>
                                   <div
                                          id="collapseUrl2"
                                          className="collapse"
                                          aria-labelledby="headingThree2"
                                          data-parent="#accordion"
                                   >
                                          <div className="card-body">
                                                 <div className="form-group">
                                                        <label for="template">
                                                               Example select
                                                        </label>
                                                        <select
                                                               className="form-control"
                                                               id="template"
                                                        >
                                                               <option>
                                                                      1
                                                               </option>
                                                               <option>
                                                                      2
                                                               </option>
                                                               <option>
                                                                      3
                                                               </option>
                                                        </select>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
