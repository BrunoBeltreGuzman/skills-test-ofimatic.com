import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       useParams,
} from "react-router-dom";

import Index from "../pages/Index";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import ConfiProfile from "../pages/ConfiProfile";
import Password from "../pages/Password";
import NotFound from "../pages/NotFound";

export default function router() {
       return (
              <div>
                     <Router>
                            <Switch>
                                   {/* index */}
                                   <Route exact path="/">
                                          <Index></Index>
                                   </Route>

                                   {/* SignIn */}
                                   <Route exact path="/signin">
                                          <SignIn></SignIn>
                                   </Route>

                                   {/* SignUp */}
                                   <Route exact path="/signup">
                                          <SignUp></SignUp>
                                   </Route>

                                   {/* Home */}
                                   <Route exact path="/home">
                                          <Home></Home>
                                   </Route>

                                   {/* Admin */}
                                   <Route exact path="/admin">
                                          <Admin></Admin>
                                   </Route>

                                   {/* ConfiProfile */}
                                   <Route exact path="/confiprofile">
                                          <ConfiProfile></ConfiProfile>
                                   </Route>

                                   {/* Change PassWord */}
                                   <Route exact path="/password">
                                          <Password></Password>
                                   </Route>

                                   {/* Profile */}
                                   <Route
                                          path="/profile/:user"
                                          component={Profile}
                                          exact
                                   />

                                   <Route component={NotFound} />
                            </Switch>
                     </Router>
              </div>
       );
}
//<Route component={NotFound} />

/*

                        <Route
                                          exact
                                          path="/profile/:profile"
                                          component={Profile}
                                   />

*/
