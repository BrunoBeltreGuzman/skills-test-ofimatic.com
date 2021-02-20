import React from "react";
import Nav from "../components/Nav/Nav";
import SignInForm from "../components/Sign/SignInForm";
import localSign from "../lib/localSign/LocalSign";

export default function SignIn() {
       if (localSign.getToken()) {
              window.location.href = "/home";
       }
       return (
              <div>
                     <Nav></Nav>
                     <SignInForm></SignInForm>
              </div>
       );
}
