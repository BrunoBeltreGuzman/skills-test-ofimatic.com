import mysql, { Pool } from "mysql2/promise";
import IConnection from "../IConnection";
import propertiesMysql from "../../config/databese/properties-mysql";

export default class ConnectinMySQL implements IConnection {
       private connection: Pool;
       private readonly database: string = propertiesMysql.database;

       private static instance: ConnectinMySQL;

       private constructor() {
              this.connect();
              this.connection = this.getConnection();
       }

       static getInstance(): ConnectinMySQL {
              if (!ConnectinMySQL.instance) {
                     ConnectinMySQL.instance = new ConnectinMySQL();
              }
              return ConnectinMySQL.instance;
       }

       private connect(): boolean {
              try {
                     this.connection = mysql.createPool(propertiesMysql);
                     if (this.connection) {
                            console.log(
                                   "Data Base '" +
                                          this.database +
                                          "' Connected!"
                            );
                     }
                     return true;
              } catch (error) {
                     throw error;
              }
       }
       disConnect(): boolean {
              try {
                     this.connection.end();
                     console.log(
                            "Data Base '" + this.database + "' Disconnected!"
                     );
                     return true;
              } catch (error) {
                     throw error;
              }
       }
       getConnection(): Pool {
              if (this.connection.getConnection()) {
                     return this.connection;
              } else {
                     this.connect();
                     return this.connection;
              }
       }
}
