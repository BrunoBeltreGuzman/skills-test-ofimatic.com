import { Request, Response, NextFunction } from "express";

export default class VerifyRole {
       constructor() {}

       static isUser(request: any, response: any, next: NextFunction) {
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

       static isAdmin(request: any, response: any, next: NextFunction) {
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

       static isReader(request: any, response: any, next: NextFunction) {
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

       static isRole(request: any, response: any, next: NextFunction) {
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

       static isNotRole(request: any, response: any, next: NextFunction) {
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

       static allRoles(request: any, response: any, next: NextFunction) {
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

       static all(request: any, response: any, next: NextFunction) {
              next();
       }
}
