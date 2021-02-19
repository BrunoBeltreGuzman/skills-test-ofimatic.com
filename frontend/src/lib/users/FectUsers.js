import usersRouters from "../../config/routers/users-routers";

export default class FectUsers {
       constructor() {}

       async findAll() {
              const response = await fetch(usersRouters.findAll, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       findById(id) {}

       findByName(name) {}
}
