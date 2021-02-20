import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       useParams,
} from "react-router-dom";
import UserProfile from "../components/Users/UserProfile";

export default function Profile() {
       const { user } = useParams();

       const intro = {
              height: "100vh",
              color: "#fff",
              backgroundColor: "rgb(20, 20, 20)",
              overflow: "hidden",
              overflow: "auto",
              fontFamily: "Roboto",
       };

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
                                                               user={user}
                                                        ></UserProfile>
                                                 </div>
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
