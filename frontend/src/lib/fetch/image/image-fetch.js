import imageFectch from "./image-routers";
import localSign from "../../localSign/LocalSign";
import axios from "axios";

class ImageFectch {
       constructor() {}

       async findById(id) {
              const response = await fetch(imageFectch.getFindById + id, {
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

       async findByUser(user) {
              const response = await fetch(imageFectch.getFindUser + user, {
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

       async getPathImage(user) {
              try {
                     const response = await fetch(
                            imageFectch.getFindUser + user,
                            {
                                   method: "GET",
                                   headers: {
                                          "Content-type":
                                                 "application/json; charset=UTF-8",
                                          authorization: localSign.getToken(),
                                   },
                            }
                     );
                     const data = await response.json();
                     console.log(data);
                     return data[0].path;
              } catch (error) {
                     console.log(error);
              }
       }

       async insert(formData) {
              const config = {
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: localSign.getToken(),
                     },
              };

              const response = await axios.post(
                     imageFectch.insert,
                     formData,
                     config
              );
              const data = JSON.parse(response.request.response);
              console.log(data);
              return data;
       }

       async update(id, formData) {
              const config = {
                     headers: {
                            "Content-type": "application/json; charset=UTF-8",
                            authorization: localSign.getToken(),
                     },
              };

              const response = await axios.put(
                     imageFectch.update + id,
                     formData,
                     config
              );
              const data = JSON.parse(response.request.response);
              console.log(data);
              return data;
       }

       async submit(user, formData) {
              const image = await this.findByUser(user);

              if (image.length > 0) {
                     const data = await this.update(image[0].id, formData);
                     const newPath = await this.getPathImage(user);
                     localSign.setPathImage(newPath);
                     return data;
              } else {
                     const data = await this.insert(formData);
                     const newPath = await this.getPathImage(user);
                     localSign.setPathImage(newPath);
                     return data;
              }
       }
}

export default new ImageFectch();
