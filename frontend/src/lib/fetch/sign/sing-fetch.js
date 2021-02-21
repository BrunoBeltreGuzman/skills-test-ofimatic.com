import signRouters from "../sign/sign-routers";
import infoFetch from "../info_users/info-fetch";

class SignFetch {
       async signin(email, password) {
              const body = {
                     email,
                     password,
              };
              const response = await fetch(signRouters.signin, {
                     method: "POST",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
                     body: JSON.stringify(body),
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async signup(name, email, password) {
              const body = {
                     name,
                     email,
                     password,
              };
              const response = await fetch(signRouters.signup, {
                     method: "POST",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
                     body: JSON.stringify(body),
              });
              const data = await response.json();
              console.log(data);
              await infoFetch.insert(data.insertId);
              return data;
       }
}

export default new SignFetch();
