import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";
import Info from "./info";
import IDAOSkills from "./IDAOInfo";

export default class InfoModel implements IDAOSkills {
       private connectinMySQL: Pool;

       constructor() {
              this.connectinMySQL = ConnectinMySQL.getInstance().getConnection();
       }

       async insert(entity: Info): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "INSERT INTO info_users (user, descripcion, work, pais, telefono, blog, facebook, linkedin, github) values (?,?,?,?,?,?,?,?,?)",
                            values: [
                                   entity.user,
                                   entity.description,
                                   entity.work,
                                   entity.pais,
                                   entity.telefono,
                                   entity.blog,
                                   entity.facebook,
                                   entity.linkedin,
                                   entity.github,
                            ],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async update(entity: Info): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql:
                                   "UPDATE info_users set user = ?, descripcion = ?, work = ?, pais = ?, telefono = ?, blog = ?, facebook = ?, linkedin = ?, github = ? WHERE id = ? ",
                            values: [
                                   entity.user,
                                   entity.description,
                                   entity.work,
                                   entity.pais,
                                   entity.telefono,
                                   entity.blog,
                                   entity.facebook,
                                   entity.linkedin,
                                   entity.github,
                                   entity.id,
                            ],
                     });
                     return result[0];
              } catch (error) {
                     throw error;
              }
       }

       async delete(id: number): Promise<any> {
              try {
                     const result = await this.connectinMySQL.query({
                            sql: "DELETE FROM info_users WHERE id = ?",
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
                            sql: "SELECT * FROM info_users",
                     });
                     return users[0];
              } catch (error) {
                     throw error;
              }
       }

       async findById(id: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM info_users where id = ?",
                     values: [id],
              });
              return users[0];
       }

       async findByUser(user: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql: "SELECT * FROM info_users where user = ?",
                     values: [user],
              });
              return users[0];
       }
}
