import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";

export default class ProfileModel {
       private connectinMySQL: Pool;

       constructor() {
              this.connectinMySQL = ConnectinMySQL.getInstance().getConnection();
       }

       async findAll(): Promise<any> {
              try {
                     const users = await this.connectinMySQL.query({
                            sql:
                                   "SELECT * FROM users JOIN info_users on users.id = info_users.user;",
                     });
                     return users[0];
              } catch (error) {
                     throw error;
              }
       }

       async findById(id: number): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql:
                            "SELECT * FROM users INNER JOIN info_users on users.id = info_users.user WHERE users.id = ?",
                     values: [id],
              });
              return users[0];
       }

       async findByName(name: string): Promise<any> {
              const users = await this.connectinMySQL.query({
                     sql:
                            "SELECT * FROM users INNER JOIN info_users on users.id = info_users.user WHERE users.name = ?",
                     values: [name],
              });
              return users[0];
       }
}
