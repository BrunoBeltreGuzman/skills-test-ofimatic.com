import IDAO from "../IDAO";
import Skills from "./skills";

export default interface IDAOSkills extends IDAO<Skills, number> {
       /*
              New Functions:
       */

       findByUser(user: number): Promise<any>;
}
