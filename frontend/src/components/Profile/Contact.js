import React from "react";

export default function Contact(props) {
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
                                                        data-target="#Contact"
                                                        aria-expanded="false"
                                                        aria-controls="Contact"
                                                 >
                                                        Contact{" "}
                                                        <i className="fas fa-angle-down"></i>
                                                 </a>
                                          </h5>
                                   </div>
                                   <div
                                          id="Contact"
                                          className="collapse"
                                          aria-labelledby="headingThree"
                                          data-parent="#accordion"
                                   >
                                          <div className="card-body">
                                                 <div className="form-group">
                                                        <label htmlFor="pais">
                                                               Pais
                                                        </label>
                                                        <input
                                                               type="text"
                                                               className="form-control"
                                                               id="pais"
                                                               defaultValue={
                                                                      data.pais
                                                               }
                                                               placeholder="Pais"
                                                        />
                                                 </div>
                                                 <div className="form-group">
                                                        <label htmlFor="telefono">
                                                               Telefono
                                                        </label>
                                                        <input
                                                               type="text"
                                                               className="form-control"
                                                               id="telefono"
                                                               defaultValue={
                                                                      data.telefono
                                                               }
                                                               placeholder="Telefono"
                                                        />
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
