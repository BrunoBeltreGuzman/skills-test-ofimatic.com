import IDAO from "../../../backend/src/api/IDAO";
import Works from "./works";

export default interface IDAOWorks extends IDAO<Works, number> {
       /*
              New Functions:
       */

       findByUser(user: number): Promise<any>;
}
