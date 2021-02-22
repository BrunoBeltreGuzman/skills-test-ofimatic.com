import React from "react";
import Nav from "../components/Nav/Nav";
import SignUpForm from "../components/Sign/SignUpForm";
import localSign from "../lib/localSign/LocalSign";
import NavAdmin from "../components/Nav/NavAdmin";
export default function SignUp() {
       if (localSign.getToken()) {
              if (localSign.getRole() == "admin") {
              } else {
                     if (localSign.getRole() != "admin") {
                            window.location.href = "/home";
                     }
              }
       }

       return (
              <div>
                     {localSign.getRole() == "admin" ? (
                            <NavAdmin></NavAdmin>
                     ) : (
                            <Nav></Nav>
                     )}

                     <SignUpForm></SignUpForm>
              </div>
       );
}
