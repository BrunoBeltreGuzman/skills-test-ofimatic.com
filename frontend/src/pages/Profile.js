import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       useParams,
} from "react-router-dom";
import UserProfile from "../components/Users/UserProfile";
import localSign from "../lib/localSign/LocalSign";

export default function Profile(props) {
       if (!localSign.getToken()) {
              window.location.href = "/signin";
       }

       const { user } = useParams();

       //temUser.temDeleteCredencials();
       const url = "https://picsum.photos/1900/900";

       const intro = {
              height: "100vh",
              color: "#fff",
              backgroundColor: "rgb(255, 255, 255)",
              backgroundImage: "url(" + url + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              overflow: "hidden",
              overflow: "auto",
              fontFamily: "Roboto",
       };

       if (props.user || user) {
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
                                                                      user={
                                                                             user ||
                                                                             props.user
                                                                      }
                                                               ></UserProfile>
                                                        </div>
                                                        {localSign.getRole() ==
                                                        "admin" ? (
                                                               <div>
                                                                      <a
                                                                             href="/admin"
                                                                             className="btn btn-secondary btn-sm"
                                                                      >
                                                                             Go
                                                                             to
                                                                             home
                                                                      </a>
                                                               </div>
                                                        ) : (
                                                               <div>
                                                                      <a
                                                                             href="/home"
                                                                             className="btn btn-secondary btn-sm"
                                                                      >
                                                                             Go
                                                                             to
                                                                             home
                                                                      </a>
                                                               </div>
                                                        )}
                                                        <br />
                                                 </div>
                                          </div>
                                          <div className="col-md-3"></div>
                                   </div>
                            </div>
                            <br />
                            <br />
                     </div>
              );
       }
}
