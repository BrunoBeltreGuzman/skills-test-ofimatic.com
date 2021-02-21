import worksRouters from "../works/works-routers";

class WorksFectch {
       constructor() {}

       async findAll() {
              const response = await fetch(worksRouters.getFindAll, {
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
              const response = await fetch(worksRouters.getFindByUser + user, {
                     method: "GET",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async insert(work) {
              const datas = {
                     work,
              };
              const response = await fetch(worksRouters.insert, {
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

export default new WorksFectch();
