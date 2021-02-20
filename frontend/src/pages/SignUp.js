import React from "react";
import Nav from "../components/Nav/Nav";
import SignUpForm from "../components/Sign/SignUpForm";
import localSign from "../lib/localSign/LocalSign";

export default function SignUp() {
       if (localSign.getToken()) {
              window.location.href = "/home";
       }

       return (
              <div>
                     <Nav></Nav>
                     <SignUpForm></SignUpForm>
              </div>
       );
}
