import React from "react";

export default function Loading() {
       return (
              <div className="container">
                     <br />
                     <br />
                     <div className="card">
                            <div className="card-body">
                                   <div
                                          className="alert alert-secondary alert-dismissible fade show"
                                          role="alert"
                                   >
                                          <h1>Loading....</h1>
                                          <button
                                                 type="button"
                                                 className="close"
                                                 data-dismiss="alert"
                                                 aria-label="Close"
                                          >
                                                 <span aria-hidden="true">
                                                        &times;
                                                 </span>
                                          </button>
                                   </div>
                            </div>
                     </div>
              </div>
       );
}
