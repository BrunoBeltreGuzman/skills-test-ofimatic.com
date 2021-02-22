import infoRouters from "./info-routers";
import usersFetch from "../users/users-fetch";
import localSign from "../../localSign/LocalSign";

class InfoUsers {
       constructor() {}

       async findAll() {
              const response = await fetch(infoRouters.getFindAll, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: localSign.getToken(),
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async deleteInfo(user) {
              const response = await fetch(infoRouters.delete + user, {
                     method: "DELETE",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: localSign.getToken(),
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async findByUser(user) {
              const response = await fetch(infoRouters.getFindByUser + user, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: localSign.getToken(),
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async insert(user) {
              const body = {
                     user,
              };
              const response = await fetch(infoRouters.insert, {
                     method: "POST",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: localSign.getToken(),
                     },
                     body: JSON.stringify(body),
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async insertData(data) {
              const info = await this.findByUser(data.user);

              if (info[0].user) {
                     await usersFetch.updateData(
                            data.user,
                            data.name,
                            data.email
                     );

                     const response = await fetch(
                            infoRouters.update + info[0].id,
                            {
                                   method: "PUT",
                                   headers: {
                                          "Content-type":
                                                 "application/json; charset=UTF-8",
                                          authorization: localSign.getToken(),
                                   },
                                   body: JSON.stringify(data),
                            }
                     );
                     const data2 = await response.json();
                     return data2;
              } else {
                     const response = await fetch(infoRouters.insert, {
                            method: "POST",
                            headers: {
                                   "Content-type":
                                          "application/json; charset=UTF-8",
                                   authorization: localSign.getToken(),
                            },
                            body: JSON.stringify(data),
                     });
                     const data2 = await response.json();
                     console.log(data2);
                     return data2;
              }
       }
}

export default new InfoUsers();
