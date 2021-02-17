import { Pool } from "mysql2/promise";

export default interface IConnection {
       //connect(): boolean;

       disConnect(): boolean;

       getConnection(): Pool;
}
