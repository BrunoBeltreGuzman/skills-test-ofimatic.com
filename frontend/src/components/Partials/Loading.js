import React from "react";

export default function Loading() {
       return (
              <div className="container">
                     <br />
                     <br />
                     <div
                            className="alert alert-secondary alert-dismissible fade show"
                            role="alert"
                     >
                            <h3>Loading...</h3>
                            <button
                                   type="button"
                                   className="close"
                                   data-dismiss="alert"
                                   aria-label="Close"
                            >
                                   <span aria-hidden="true">&times;</span>
                            </button>
                     </div>
              </div>
       );
}
