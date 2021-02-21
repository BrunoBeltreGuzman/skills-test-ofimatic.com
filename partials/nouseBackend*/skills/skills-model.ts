import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";
import Skills from "./skills";
import IDAOSkills from "./IDAOSkills";

export default class SkillsModel implements IDAOSkills {
       private connectinMySQL: any;
       constructor() {
              this.connectinMySQL = ConnectinMySQL.getConnectionMySQL();
       }

       async insert(entity: Skills): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "INSERT INTO skills (skill, user) values (?,?)",
                            values: [entity.skill, entity.user],
                     });

                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async update(entity: Skills): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "UPDATE skills set skill = ?, user = ? WHERE id = ?",
                            values: [entity.skill, entity.user, entity.id],
                     });

                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async delete(id: number): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql: "DELETE FROM skills WHERE id = ?",
                            values: [id],
                     });

                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async findAll(): Promise<any> {
              try {
                     const users = await this.connectinMySQL.query({
                            sql: "SELECT * FROM skills",
                     });

                     return users[0];
              } catch (error) {
                     throw error;
              }
       }

       async findById(id: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM skills where id = ?",
                     values: [id],
              });

              return users[0];
       }

       async findByUser(user: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM skills where user = ?",
                     values: [user],
              });

              return users[0];
       }
}
