import mysql, { Pool } from "mysql2/promise";
import IConnection from "../IConnection";
import propertiesMysql from "../../config/databese/properties-mysql";

export default class ConnectinMySQL implements IConnection {
       private connection: any;
       private readonly database: string = propertiesMysql.database;

       private static connection2: any;

       private static instance: ConnectinMySQL;

       private constructor() {
              this.connect();
              this.connection = this.getConnection();
              ConnectinMySQL.connection2 = this.getConnection();
       }

       static getInstance(): ConnectinMySQL {
              if (!ConnectinMySQL.instance) {
                     ConnectinMySQL.instance = new ConnectinMySQL();
              }
              return ConnectinMySQL.instance;
       }

       static getConnection2(): Pool {
              if (!ConnectinMySQL.connection2) {
                     ConnectinMySQL.instance = new ConnectinMySQL();
              }
              return ConnectinMySQL.connection2;
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
                     this.connection.release();

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
