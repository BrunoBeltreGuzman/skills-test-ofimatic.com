import React from "react";
import {
       BrowserRouter as Router,
       Route,
       Switch,
       useParams,
} from "react-router-dom";

import NewProfile from "../components/NewProfile";

export default function Profile() {
       return <NewProfile></NewProfile>;

       let { profile } = useParams();

       return (
              <div>
                     <h3>Profile: {profile}</h3>
              </div>
       );
}
