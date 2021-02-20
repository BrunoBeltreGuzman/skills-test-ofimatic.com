import React from "react";
import Nav from "../components/Nav/Nav";
import IndexBody from "../components/Index/IndexBody";
import localSign from "../lib/localSign/LocalSign";

export default function Index() {
       if (localSign.getToken()) {
              window.location.href = "/home";
       }

       return (
              <div>
                     <Nav></Nav>
                     <br />
                     <br />
                     <br />
                     <br />
                     <IndexBody></IndexBody>
                     <br />
                     <br />
                     <br />
                     <br />
              </div>
       );
}
