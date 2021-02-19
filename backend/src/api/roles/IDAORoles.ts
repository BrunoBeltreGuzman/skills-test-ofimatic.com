import IDAO from "../IDAO";
import Roles from "./roles";

export default interface IDAORoles extends IDAO<Roles, number> {
       /*
              New Functions:
       */

       findByRole(name: string): Promise<any>;
}

/*

     

*/
