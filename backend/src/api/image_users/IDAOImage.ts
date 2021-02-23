import IDAO from "../IDAO";
import Image from "./image";

export default interface IDAOSkills extends IDAO<Image, number> {
       /*
              New Functions:
       */
       findByUser(user: number): Promise<any>;
}
