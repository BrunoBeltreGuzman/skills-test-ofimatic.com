import React from "react";

export default function Informacion(props) {
       const data = props.data;
       return (
              <div>
                     <div id="accordion">
                            <div className="card">
                                   <div
                                          className="card-header"
                                          id="headingThree"
                                   >
                                          <h5 className="mb-0">
                                                 <a
                                                        className="btn btn-light collapsed"
                                                        data-toggle="collapse"
                                                        data-target="#collapseDescription"
                                                        aria-expanded="false"
                                                        aria-controls="collapseDescription"
                                                 >
                                                        Informacion{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                 </a>
                                          </h5>
                                   </div>
                                   <div
                                          id="collapseDescription"
                                          className="collapse"
                                          aria-labelledby="headingThree"
                                          data-parent="#accordion"
                                   >
                                          <div className="card-body">
                                                 <div className="form-group">
                                                        <label htmlFor="description">
                                                               Description
                                                        </label>
                                                        <textarea
                                                               className="form-control"
                                                               id="description"
                                                               defaultValue={
                                                                      data.descripcion
                                                               }
                                                               placeholder="Description"
                                                               rows="3"
                                                        ></textarea>
                                                 </div>
                                                 <div className="form-group">
                                                        <label htmlFor="trabajo">
                                                               Work
                                                        </label>
                                                        <input
                                                               type="text"
                                                               className="form-control"
                                                               id="trabajo"
                                                               defaultValue={
                                                                      data.work
                                                               }
                                                               placeholder="Work"
                                                        />
                                                 </div>
                                                 <div className="form-group">
                                                        <label htmlFor="skill">
                                                               Skill
                                                        </label>
                                                        <input
                                                               type="text"
                                                               className="form-control"
                                                               id="skill"
                                                               defaultValue={
                                                                      data.skill
                                                               }
                                                               placeholder="Skill"
                                                        />
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
