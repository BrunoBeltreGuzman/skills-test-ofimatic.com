import { Request, Response } from "express";
import IContoller from "../IContoller";
import Users from "./users";
import Validator from "../../lib/validate/validator";
import UsersModel from "./users-model";
import IDAOUsers from "./IDAOUsers";
import Errors from "../../exceptions/error/errors";

const validator: Validator = new Validator();
const modelUsers: IDAOUsers = new UsersModel();

export default class UsersController implements IContoller<Request, Response> {
       constructor() {}

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
                            const user: Users = {
                                   id: 0,
                                   name,
                                   email,
                                   password,
                            };
                            const result = await modelUsers.insert(user);
                            return response.status(200).json(result);
                     } catch (error) {
                            response
                                   .status(500)
                                   .json(Errors.HandlingError(error));
                            throw error;
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
                            const user: Users = {
                                   id,
                                   name,
                                   email,
                                   password,
                            };
                            const result = await modelUsers.update(user);
                            return response.status(200).json(result);
                     } catch (error) {
                            response
                                   .status(500)
                                   .json(Errors.HandlingError(error));
                            throw error;
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
              Delete Users
       */
       async delete(request: Request, response: Response): Promise<Response> {
              let id: number;

              if (validator.isNumber(request.params.id)) {
                     id = parseInt(request.params.id);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "{id}, name, email, password",
                            status: 400,
                     });
              }
              try {
                     const result = await modelUsers.delete(id);
                     return response.status(200).json(result);
              } catch (error) {
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
                     response.status(500).json(Errors.HandlingError(error));
                     throw error;
              }
       }

       /*
              FindById Users
       */
       async findById(request: Request, response: Response): Promise<Response> {
              try {
                     const id: number = parseInt(request.params.id);
                     const result = await modelUsers.findById(id);
                     return response.status(200).json(result);
              } catch (error) {
                     response.status(500).json(Errors.HandlingError(error));
                     throw error;
              }
       }
}
