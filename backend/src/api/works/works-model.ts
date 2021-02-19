import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";
import Works from "./works";
import IDAOWorks from "./IDAOWorks";

export default class WorksModel implements IDAOWorks {
       private connectinMySQL: Pool;

       constructor() {
              this.connectinMySQL = ConnectinMySQL.getInstance().getConnection();
       }

       async insert(entity: Works): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql: "INSERT INTO works (work, user) values (?,?)",
                            values: [entity.work, entity.user],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async update(entity: Works): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "UPDATE works set work = ?, user = ? WHERE id = ?",
                            values: [entity.work, entity.user, entity.id],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async delete(id: number): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql: "DELETE FROM works WHERE id = ?",
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
                            sql: "SELECT * FROM works",
                     });
                     return users[0];
              } catch (error) {
                     throw error;
              }
       }

       async findById(id: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM works where id = ?",
                     values: [id],
              });
              return users[0];
       }

       async findByUser(user: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM works where user = ?",
                     values: [user],
              });
              return users[0];
       }
}
