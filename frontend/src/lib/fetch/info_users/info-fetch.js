import skillsRouters from "../skills/skills-routers";

class InfoUsers {
       constructor() {}

       async findAll() {
              const response = await fetch(skillsRouters.getFindAll, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async findByUser(user) {
              const response = await fetch(
                     skillsRouters.getFindByUser + "/" + user,
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

export default new InfoUsers();
