import React, { useState, useEffect } from "react";
import profileFectch from "../../lib/fetch/profile/profile-fetch";
import imageFetch from "../../lib/fetch/image/image-fetch";
import Loading from "../Partials/Loading";
import Error from "../Partials/Error";
import Template1 from "../Template/Template1";
import Template2 from "../Template/Template2";
import Template3 from "../Template/Template3";

function useFectchProfile(id) {
       const [loading, setLoading] = useState([null]);
       const [error, setError] = useState([]);
       const [datas, setData] = useState([]);

       useEffect(async function () {
              try {
                     setLoading(true);
                     const data = await profileFectch.findById(id);
                     const data2 = await imageFetch.findByUser(id);
                     setData([data[0], data2[0]]);
                     setLoading(false);
              } catch (error) {
                     setError(error);
                     setLoading(false);
              }
       }, []);
       return { datas, loading, error };
}

export default function UserProfile(props) {
       const { datas, loading, error } = useFectchProfile(props.user);

       if (loading) {
              return <Loading></Loading>;
       }

       if (datas[0]) {
              const data = datas[0];

              let path = "";
              if (datas[1]) {
                     path = "http://localhost:2000/" + datas[1].path;
              } else {
                     path = "../img/avatar.png";
              }

              if (datas[0].template == 1) {
                     return <Template1 data={data} path={path}></Template1>;
              }

              if (datas[0].template == 2) {
                     return <Template2 data={data} path={path}></Template2>;
              }
              if (datas[0].template == 3) {
                     return <Template3 data={data} path={path}></Template3>;
              }
              return <Template1 data={data} path={path}></Template1>;
       }
       if (error) {
              return <Error error={error}></Error>;
       }
}
