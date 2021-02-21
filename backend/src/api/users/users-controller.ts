import { Request, Response } from "express";
import IContoller from "../IContoller";
import Users from "./users";
import Validator from "../../lib/validate/validator";
import UsersModel from "./users-model";
import IDAOUsers from "./IDAOUsers";
import Errors from "../../exceptions/error/errors";
import Bcrypt from "../../lib/bcrypt/bcrypt";

const validator: Validator = Validator.getInstance();
const modelUsers: IDAOUsers = UsersModel.getInstance();

export default class UsersController implements IContoller<Request, Response> {
       private constructor() {}

       private static instance: UsersController;

       static getInstance() {
              if (!UsersController.instance) {
                     UsersController.instance = new UsersController();
              }
              return UsersController.instance;
       }

       /*
              insert Users
       */
       async insert(request: Request, response: Response): Promise<Response> {
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
                            const result = await modelUsers.insert(user);
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

       /*
              Update Users
       */
       async update(request: Request, response: Response): Promise<Response> {
              const name = request.body.name;
              const email = request.body.email;
              let password = request.body.password;
              let id: number;

              if (validator.isNumber(request.params.id)) {
                     id = parseInt(request.params.id);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id, name, email, password",
                            status: 400,
                     });
              }

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
                                   id,
                                   name,
                                   email,
                                   password,
                            };
                            const result = await modelUsers.update(user);
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
                            inputs: "id, name, email, password",
                            status: 400,
                     });
              }
       }

       async updateData(
              request: Request,
              response: Response
       ): Promise<Response> {
              let id: number;
              const name: string = request.body.name;
              const email: string = request.body.email;
              const password: string = "";

              if (validator.isNumber(request.params.user)) {
                     id = parseInt(request.params.user);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "user, name, email",
                            status: 400,
                     });
              }
              if (validator.isValidate(name) && validator.isValidate(email)) {
                     try {
                            const newUser: Users = {
                                   id,
                                   name,
                                   email,
                                   password,
                            };
                            const result = await modelUsers.updateData(newUser);
                            return response.status(200).json(result);
                     } catch (error) {
                            console.log(Errors.HandlingError(error));
                            response
                                   .status(500)
                                   .json(Errors.HandlingError(error));
                            throw error;
                     }
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "user, name, email",
                            status: 400,
                     });
              }
       }

       async changePassword(
              request: Request,
              response: Response
       ): Promise<Response> {
              let user: number;
              let password: string = request.body.password;
              let newPassword: string = request.body.newPassword;

              if (validator.isNumber(request.params.user)) {
                     user = parseInt(request.params.user);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "user, password, newPassword",
                            status: 400,
                     });
              }
              if (
                     validator.isValidate(password) &&
                     validator.isValidate(newPassword)
              ) {
                     try {
                            const result = await modelUsers.findById(user);
                            const validPassword = await Bcrypt.matchPassword(
                                   password,
                                   result[0].password
                            );
                            if (validPassword) {
                                   //bcrypt password
                                   newPassword = await Bcrypt.encryptPassword(
                                          newPassword
                                   );
                                   const results = await modelUsers.changePassword(
                                          user,
                                          newPassword
                                   );
                                   return response.status(200).json(results);
                            } else {
                                   return response.status(400).json({
                                          message: "Incorrect Password",
                                   });
                            }
                     } catch (error) {
                            console.log(Errors.HandlingError(error));
                            response
                                   .status(500)
                                   .json(Errors.HandlingError(error));
                            throw error;
                     }
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "user, name, email",
                            status: 400,
                     });
              }
       }

       /*
              Delete Users
       */
       async delete(request: Request, response: Response): Promise<Response> {
              let id: number;

              if (validator.isNumber(request.params.id)) {
                     id = parseInt(request.params.id);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id",
                            status: 400,
                     });
              }
              try {
                     const result = await modelUsers.delete(id);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     response.status(500).json(Errors.HandlingError(error));
                     throw error;
              }
       }

       /*
              findAll Users 
       */
       async findAll(request: Request, response: Response): Promise<Response> {
              try {
                     const result: Users = await modelUsers.findAll();
                     return response.status(200).json(result);
              } catch (error) {
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       /*
              FindById Users
       */
       async findById(request: Request, response: Response): Promise<Response> {
              try {
                     const id: number = parseInt(request.params.id);
                     const result: Users = await modelUsers.findById(id);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async findByName(
              request: Request,
              response: Response
       ): Promise<Response> {
              try {
                     const name: string = request.params.name;
                     const result: Users = await modelUsers.findByName(name);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }
}
