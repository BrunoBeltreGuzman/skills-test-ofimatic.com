import React from "react";

export default function Error(props) {
       const error = props.error;
       if (error.message) {
              return (
                     <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                     >
                            <p>
                                   <strong>Error: </strong>
                                   {error.message}
                            </p>
                            <button
                                   type="button"
                                   className="close"
                                   data-dismiss="alert"
                                   aria-label="Close"
                            >
                                   <span aria-hidden="true">&times;</span>
                            </button>
                     </div>
              );
       }
       return (
              <div className="container">
                     <div
                            className="alert alert-danger alert-dismissible fade show"
                            role="alert"
                     >
                            <strong>Opps! </strong>We have a error
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
