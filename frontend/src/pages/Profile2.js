import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       useParams,
} from "react-router-dom";

import NewProfile from "../components/partials/NewProfile";

export default function Profile2() {
       return <NewProfile></NewProfile>;

       let { profile } = useParams();

       return (
              <div>
                     <h3>Profile: {profile}</h3>
              </div>
       );
}
