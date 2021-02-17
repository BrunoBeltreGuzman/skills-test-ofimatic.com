import Error from "./error";

export default class Errors {
       constructor() {}

       static HandlingError(error: any) {
              const newError: Error = {
                     message: "Error Internal in the server",
                     error: error,
                     statusCode: "",
                     statusMessage: "",
                     code: "",
              };
              return newError;
       }
}
