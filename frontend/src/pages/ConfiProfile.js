import React from "react";
import NavUsers from "../components/Nav/NavUsers";
import NavAdmin from "../components/Nav/NavAdmin";
import localSign from "../lib/localSign/LocalSign";

import FormProfile from "../components/Profile/FormProfile";
import temUser from "../lib/localSign/TemUser";

export default function ConfiProfile() {
       if (!localSign.getToken() && !temUser.temGetUserId()) {
              window.location.href = "/signin";
       }
       return (
              <div>
                     {localSign.getRole() == "admin" ? (
                            <NavAdmin></NavAdmin>
                     ) : (
                            <NavUsers></NavUsers>
                     )}

                     <br />
                     <FormProfile></FormProfile>
              </div>
       );
}
