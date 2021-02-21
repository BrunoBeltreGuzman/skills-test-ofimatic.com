import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";
import Users from "./users";
import IDAOUsers from "./IDAOUsers";

export default class UsersModel implements IDAOUsers {
       private connectinMySQL: any;
       private constructor() {
              this.connectinMySQL = ConnectinMySQL.getConnectionMySQL();
       }

       private static instance: UsersModel;

       static getInstance() {
              if (!UsersModel.instance) {
                     UsersModel.instance = new UsersModel();
              }
              return UsersModel.instance;
       }

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

       async updateData(entity: Users): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "UPDATE users set name = ?, email = ? WHERE id = ?",
                            values: [entity.name, entity.email, entity.id],
                     });

                     return result[0];
              } catch (error) {
                     throw error;
              }
       }
       async changePassword(user: number, newPassword: string): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql: "UPDATE users set password = ? WHERE id = ?",
                            values: [newPassword, user],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

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

       async findById(id: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM users where id = ?",
                     values: [id],
              });

              return users[0];
       }

       async findByName(name: string): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM users where name = ?",
                     values: [name],
              });

              return users[0];
       }

       async findByEmail(email: string): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM users where email = ?",
                     values: [email],
              });

              return users[0];
       }
}
