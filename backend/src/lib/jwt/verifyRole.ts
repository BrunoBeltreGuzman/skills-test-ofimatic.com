import { Request, Response, NextFunction } from "express";

export default class VerifyRole {
       constructor() {}

       isUser(request: any, response: any, next: NextFunction) {
              console.log("Role: " + request.user.role[0].role);
              if (request.user.role[0].role === "user") {
                     next();
              } else {
                     response.status(401).send({
                            isUser: false,
                            message: "Require User Role!",
                            status: 401,
                     });
              }
       }

       isAdmin(request: any, response: any, next: NextFunction) {
              console.log("Role: " + request.user.role[0].role);
              if (request.user.role[0].role === "admin") {
                     next();
              } else {
                     response.status(401).send({
                            isAdmin: false,
                            message: "Require Admin Role!",
                            status: 401,
                     });
              }
       }

       isReader(request: any, response: any, next: NextFunction) {
              console.log("Role: " + request.user.role[0].role);
              if (request.user.role[0].role === "reader") {
                     next();
              } else {
                     response.status(401).send({
                            isReader: false,
                            message: "Require Reader Role!",
                            status: 401,
                     });
              }
       }

       isRole(request: any, response: any, next: NextFunction) {
              console.log("Role: " + request.user.role[0].role);
              if (request.user.role[0].role) {
                     next();
              } else {
                     response.status(403).send({
                            isRole: false,
                            message: "Require Role!",
                            status: 403,
                     });
              }
       }

       isNotRole(request: any, response: any, next: NextFunction) {
              console.log("Role: " + request.user.role[0].role);
              if (!request.user.role[0].role) {
                     next();
              } else {
                     response.status(200).send({
                            isRole: true,
                            role: request.user.role[0],
                            message: "Is Role!",
                            status: 200,
                     });
              }
       }

       allRoles(request: any, response: any, next: NextFunction) {
              console.log("Role: " + request.user.role[0].role);
              if (request.user.role[0].role) {
                     next();
              } else {
                     response.status(403).send({
                            isRole: false,
                            message: "Require Role!",
                            status: 403,
                     });
              }
       }

       all(request: any, response: any, next: NextFunction) {
              next();
       }
}
