import IDAO from "../IDAO";
import Users from "./users";

export default interface IDAOUsers extends IDAO<Users, number> {
       /*
              New Functions:
       */

       findByName(name: string): Promise<any>;
       findByEmail(email: string): Promise<any>;

       updateData(user: Users): Promise<any>;
       changePassword(user: number, newPassword: string): Promise<any>;
}
