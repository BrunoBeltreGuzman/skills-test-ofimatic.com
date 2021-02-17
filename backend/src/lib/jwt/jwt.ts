import jwt, { DecodeOptions } from "jsonwebtoken";
const config = require("../../config/auth.config.js");
import { Request, Response, NextFunction } from "express";

class JsonWebToken {
       constructor() {}

       signJwt(user: any) {
              const token = jwt.sign({ user }, config.secret);
              return token;
       }

       verifyToken(request: any, response: any, next: NextFunction) {
              const token = request.headers["authorization"];
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

module.exports = new JsonWebToken();
