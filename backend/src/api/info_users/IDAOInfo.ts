import IDAO from "../IDAO";
import Info from "./info";

export default interface IDAOSkills extends IDAO<Info, number> {
       /*
              New Functions:
       */

       findByUser(user: number): Promise<any>;
}
