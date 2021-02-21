import Users from "../users/users";
import UsersModel from "../users/users-model";

export default class ModelSign {
       private users: UsersModel;
       private constructor() {
              this.users = UsersModel.getInstance();
       }

       private static instance: ModelSign;

       static getInstance() {
              if (!ModelSign.instance) {
                     ModelSign.instance = new ModelSign();
              }
              return ModelSign.instance;
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
