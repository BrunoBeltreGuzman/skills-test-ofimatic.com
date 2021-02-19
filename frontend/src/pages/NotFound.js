import React from "react";

export default function NotFound() {
       document.getElementById("body").className = "bg bg-dark";

       return (
              <div className="bg bg-dark">
                     <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="display-1 text-light text-center">
                                   <strong>Oops! </strong>
                                   404
                            </h1>
                            <div className="mb-4 lead  text-light text-center">
                                   <h2>
                                          The page you are looking for was not
                                          found.
                                   </h2>
                            </div>
                            <br />
                            <div className="text-center">
                                   <a
                                          className="link text-center btn btn-info"
                                          href="/"
                                   >
                                          Ir a Inicio
                                   </a>
                            </div>
                     </div>
              </div>
       );
}
