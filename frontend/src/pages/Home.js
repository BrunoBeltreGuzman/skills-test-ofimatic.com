import React from "react";
import NavUsers from "../components/Nav/NavUsers";
import localSign from "../lib/localSign/LocalSign";
import UserSocials from "../components/Users/UserSocials";

export default function Home() {
       if (localSign.getRole() == "admin") {
              window.location.href = "/admin";
       }

       if (!localSign.getToken()) {
              window.location.href = "/signin";
       }

       return (
              <div>
                     <NavUsers></NavUsers>
                     <UserSocials></UserSocials>
              </div>
       );
}
