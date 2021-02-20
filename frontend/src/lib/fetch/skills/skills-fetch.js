import skillsRouters from "../skills/skills-routers";

class SkillsFectch {
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
              const response = await fetch(skillsRouters.getFindByUser + user, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async insert(skill) {
              const datas = {
                     skill,
              };
              const response = await fetch(skillsRouters.insert, {
                     method: "POST",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
                     data: JSON.stringify(datas),
              });
              const data = await response.json();
              console.log(data);
              return data;
       }
}

export default new SkillsFectch();
