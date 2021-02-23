import { Request, Response } from "express";

import ConnectinMySQL from "../../database/connectinMySQL/ConnectinMySQL";
import IDAOImage from "./IDAOImage";
import Image from "./image";

export default class ImageModel implements IDAOImage {
       private connectinMySQL: any;

       private constructor() {
              this.connectinMySQL = ConnectinMySQL.getConnectionMySQL();
       }

       private static instance: ImageModel;

       static getInstance() {
              if (!ImageModel.instance) {
                     ImageModel.instance = new ImageModel();
              }
              return ImageModel.instance;
       }

       async insert(image: Image) {
              const result = await this.connectinMySQL.query({
                     sql:
                            "INSERT INTO imageUser (user, originalname, mimetype,  filename,  path, size) VALUES (?,?,?,?,?,?)",
                     values: [
                            image.user,
                            image.originalname,
                            image.mimetype,
                            image.filename,
                            image.path,
                            image.size,
                     ],
              });
              return result[0];
       }

       async update(image: Image): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql:
                            "UPDATE imageUser set user = ?, originalname = ?, mimetype = ?,  filename = ?,  path = ?, size = ? WHERE id = ?",
                     values: [
                            image.user,
                            image.originalname,
                            image.mimetype,
                            image.filename,
                            image.path,
                            image.size,
                            image.id,
                     ],
              });
              return result[0];
       }

       async delete(id: number): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "DELETE FROM imageUser WHERE id = ?",
                     values: [id],
              });
              return result[0];
       }

       async findAll(): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "SELECT * FROM imageUser",
              });
              return result[0];
       }

       async findById(id: number): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "SELECT * FROM imageUser WHERE id = ?",
                     values: [id],
              });
              return result[0];
       }

       async findByUser(user: number): Promise<any> {
              const result = await this.connectinMySQL.query({
                     sql: "SELECT * FROM imageUser WHERE user = ?",
                     values: [user],
              });
              return result[0];
       }
}
