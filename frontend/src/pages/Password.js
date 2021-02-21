import React from "react";
import NavUsers from "../components/Nav/NavUsers";
import localSign from "../lib/localSign/LocalSign";
import FormPass from "../components/Sign/FormPass";

export default function Password() {
       if (localSign.getRole() == "admin") {
              window.location.href = "/admin";
       }

       if (!localSign.getToken()) {
              window.location.href = "/signin";
       }

       return (
              <div>
                     <NavUsers></NavUsers>
                     <FormPass></FormPass>
              </div>
       );
}
