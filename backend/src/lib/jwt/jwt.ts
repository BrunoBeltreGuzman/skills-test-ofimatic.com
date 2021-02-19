import jwt, { DecodeOptions } from "jsonwebtoken";
const config = require("../../config/jwt/key");
import { Request, Response, NextFunction } from "express";

export default class JWT {
       constructor() {}

       static async signJwt(user: any) {
              const token = jwt.sign({ user }, config.secret);
              return token;
       }

       static async verifyToken(
              request: any,
              response: any,
              next: NextFunction
       ) {
              const token = await request.headers["authorization"];
              if (!token) {
                     return response.status(403).send({
                            message: "No token provided!",
                            status: 403,
                     });
              }
              try {
                     const decode: any = jwt.verify(token, config.secret);
                     request.user = decode.user;
                     next();
              } catch (error) {
                     response.status(500).json({
                            message: "Error Internal in the server",
                            error: {
                                   error,
                            },
                     });
                     throw error;
              }
       }
}
