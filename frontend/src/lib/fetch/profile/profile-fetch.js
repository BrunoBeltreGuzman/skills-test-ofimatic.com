import profileRouters from "./profile-routers";

class FectchProfile {
       constructor() {}

       async findAll() {
              const response = await fetch(profileRouters.getFindAll, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async findById(id) {
              const response = await fetch(profileRouters.getFindById + id, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async findByName(name) {
              const response = await fetch(
                     profileRouters.getFindByName + name,
                     {
                            method: "GET",
                            headers: {
                                   "Content-type":
                                          "application/json; charset=UTF-8",
                            },
                     }
              );
              const data = await response.json();
              console.log(data);
              return data;
       }
}

export default new FectchProfile();
