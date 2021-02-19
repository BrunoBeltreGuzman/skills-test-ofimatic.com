import Users from "../users/users";
import UsersModel from "../users/users-model";

export default class ModelSign {
       private users: UsersModel;
       constructor() {
              this.users = new UsersModel();
       }

       /*
              Signin
       */
       async signin(email: string) {
              const user = await this.users.findByEmail(email);
              return user;
       }

       /*
              Signup
       */
       async signup(user: Users) {
              const result = await this.users.insert(user);
              return result;
       }
}
