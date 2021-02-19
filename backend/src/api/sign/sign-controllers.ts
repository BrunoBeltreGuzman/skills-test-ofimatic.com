import { Request, Response } from "express";
import Users from "../users/users";
import Validator from "../../lib/validate/validator";
import SignModel from "./sign-model";
import RolesModel from "../roles/roles-model";
import Errors from "../../exceptions/error/errors";

const validator: Validator = new Validator();
const signModel: SignModel = new SignModel();
const rolesModel: RolesModel = new RolesModel();

import Bcrypt from "../../lib/bcrypt/bcrypt";
import JWT from "../../lib/jwt/jwt";

export default class ControllerSing {
       constructor() {}

       /*
              Signin
       */
       async signin(request: Request, response: Response): Promise<Response> {
              const email: string = request.body.email;
              const password: string = request.body.password;

              if (validator.isValidate(email)) {
                     if (validator.isValidate(password)) {
                            try {
                                   const result = await signModel.signin(email);
                                   if (result[0]) {
                                          const validPassword = await Bcrypt.matchPassword(
                                                 password,
                                                 result[0].password
                                          );
                                          if (validPassword) {
                                                 const role = await rolesModel.findById(
                                                        result[0].role
                                                 );
                                                 const token = await JWT.signJwt(
                                                        {
                                                               user: result[0],
                                                               role: role,
                                                        }
                                                 );
                                                 return response
                                                        .status(200)
                                                        .json({
                                                               user: result[0],
                                                               role: role,
                                                               token: token,
                                                               message:
                                                                      "Signin Success",
                                                        });
                                          } else {
                                                 return response
                                                        .status(400)
                                                        .json({
                                                               message:
                                                                      "Incorrect Password",
                                                        });
                                          }
                                   } else {
                                          return response.status(400).json({
                                                 message:
                                                        "The Email does not exists.",
                                          });
                                   }
                            } catch (error) {
                                   console.log(Errors.HandlingError(error));
                                   return response
                                          .status(500)
                                          .json(Errors.HandlingError(error));
                            }
                     } else {
                            return response.status(400).json({
                                   message: "Password required",
                            });
                     }
              } else {
                     return response
                            .status(400)
                            .json({ message: "User required" });
              }
       }

       /*
              Signup 
       */
       async signup(request: Request, response: Response): Promise<Response> {
              const name = request.body.name;
              const email = request.body.email;
              let password = request.body.password;

              if (
                     validator.isValidate(name) &&
                     validator.isValidate(email) &&
                     validator.isValidate(password)
              ) {
                     try {
                            //bcrypt password
                            password = await Bcrypt.encryptPassword(
                                   request.body.password
                            );
                            const user: Users = {
                                   id: 0,
                                   name,
                                   email,
                                   password,
                            };
                            const result = await signModel.signup(user);
                            return response.status(200).json(result);
                     } catch (error) {
                            console.log(Errors.HandlingError(error));
                            return response
                                   .status(500)
                                   .json(Errors.HandlingError(error));
                     }
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "name, email, password",
                            status: 400,
                     });
              }
       }
}
