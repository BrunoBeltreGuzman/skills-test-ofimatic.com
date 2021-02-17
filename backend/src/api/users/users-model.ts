import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";
import Users from "./users";
import IDAOUsers from "./IDAOUsers";

export default class UsersModel implements IDAOUsers {
       private connectinMySQL: Pool;

       constructor() {
              this.connectinMySQL = new ConnectinMySQL().getConnection();
       }

       /*
              Insert Users 
       */
       async insert(entity: Users): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "INSERT INTO users (name, email, password) values (?,?,?)",
                            values: [
                                   entity.name,
                                   entity.email,
                                   entity.password,
                            ],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       /*
              Update Users
       */
       async update(entity: Users): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "UPDATE users set name = ?, email = ?, password = ? WHERE id = ?",
                            values: [
                                   entity.name,
                                   entity.email,
                                   entity.password,
                                   entity.id,
                            ],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       /*
              Delete Users
       */
       async delete(id: number): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql: "DELETE FROM users WHERE id = ?",
                            values: [id],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       /*
              FindAll Users
       */
       async findAll(): Promise<any> {
              try {
                     const users = await this.connectinMySQL.query({
                            sql: "SELECT * FROM users",
                     });
                     return users[0];
              } catch (error) {
                     throw error;
              }
       }

       /*
              findById Users
       */
       async findById(id: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM users where id = ?",
                     values: [id],
              });
              return users[0];
       }
}
