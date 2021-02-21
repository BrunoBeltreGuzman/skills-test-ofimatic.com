import usersRouters from "./users-routers";

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

       async delete(id) {
              const response = await fetch(usersRouters.delete + id, {
                     method: "DELETE",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async updateData(user, name, email) {
              const body = {
                     name,
                     email,
              };
              const response = await fetch(usersRouters.updateData + user, {
                     method: "PUT",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
                     body: JSON.stringify(body),
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       async changePassword(user, password, newPassword) {
              const body = {
                     password,
                     newPassword,
              };
              const response = await fetch(usersRouters.changePassword + user, {
                     method: "PUT",
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                     },
                     body: JSON.stringify(body),
              });
              const data = await response.json();
              console.log(data);
              return data;
       }

       findById(id) {}

       findByName(name) {}
}

export default new UsersFectch();
