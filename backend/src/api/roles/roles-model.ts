import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import { Pool } from "mysql2/promise";
import Roles from "./roles";
import IDAORoles from "./IDAORoles";

export default class RolesModel implements IDAORoles {
       private connectinMySQL: any;
       private constructor() {
              this.connectinMySQL = ConnectinMySQL.getConnectionMySQL();
       }

       private static instance: RolesModel;

       static getInstance() {
              if (!RolesModel.instance) {
                     RolesModel.instance = new RolesModel();
              }
              return RolesModel.instance;
       }

       async insert(entity: Roles): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "INSERT INTO roles (role) VALUES (?)",
                     values: [entity.role],
              });

              return result[0];
       }

       /*
              Update Role
       */
       async update(entity: Roles): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "UPDATE  roles SET role = ? WHERE id = ?",
                     values: [entity.role, entity.id],
              });

              return result[0];
       }

       /*
              Delete Role
       */
       async delete(id: number): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "DELETE FROM roles WHERE id = ?",
                     values: [id],
              });

              return result[0];
       }

       /*
              FindAll Role
       */
       async findAll() {
              const roles = await this.connectinMySQL.query({
                     sql: "SELECT * FROM roles",
              });

              return roles[0];
       }

       /*
              FindById Role
       */
       async findById(id: number): Promise<any> {
              const role = await this.connectinMySQL.query({
                     sql: "SELECT * FROM roles WHERE id = ?",
                     values: [id],
              });

              return role[0];
       }

       async findByRole(role: string): Promise<any> {
              const roles = await this.connectinMySQL.query({
                     sql: "SELECT * FROM roles WHERE role = ?",
                     values: [role],
              });

              return roles[0];
       }
}
