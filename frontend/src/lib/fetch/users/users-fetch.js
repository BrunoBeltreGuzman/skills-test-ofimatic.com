//import usersRouters from "../../config/routers/users-routers";

class UsersFectch {
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

export default new UsersFectch();
