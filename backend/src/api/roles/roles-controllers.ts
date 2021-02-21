import { Request, Response } from "express";
import IContoller from "../IContoller";
import Roles from "./roles";
import Validator from "../../lib/validate/validator";
import RolesModel from "./roles-model";
import Errors from "../../exceptions/error/errors";

const validator: Validator = Validator.getInstance();
const rolesModel: RolesModel = RolesModel.getInstance();

export default class ControllerRoles implements IContoller<Request, Response> {
       private constructor() {}

       private static instance: ControllerRoles;

       static getInstance() {
              if (!ControllerRoles.instance) {
                     ControllerRoles.instance = new ControllerRoles();
              }
              return ControllerRoles.instance;
       }

       /*
              Insert Role
       */
       async insert(request: Request, response: Response): Promise<Response> {
              const role: string = request.body.role;
              const id: number = 0;
              if (validator.isValidate(role)) {
                     try {
                            const newRole: Roles = {
                                   id,
                                   role,
                            };
                            const result = await rolesModel.insert(newRole);
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
                            inputs: "id, role",
                            status: 400,
                     });
              }
       }

       /*
              Update Role
       */
       async update(request: Request, response: Response): Promise<Response> {
              const role: string = request.body.role;
              let id: number = 0;

              if (validator.isNumber(request.params.id)) {
                     id = parseInt(request.params.id);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id, role",
                            status: 400,
                     });
              }

              if (validator.isValidate(role)) {
                     try {
                            const newRole: Roles = {
                                   id,
                                   role,
                            };
                            const result = await rolesModel.update(newRole);
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
                            inputs: "id, role",
                            status: 400,
                     });
              }
       }

       /*
              Delete Role
       */
       async delete(request: Request, response: Response): Promise<Response> {
              if (validator.isNumber(request.params.id)) {
                     const id: number = parseInt(request.params.id);
                     try {
                            const result = await rolesModel.delete(id);
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
                            inputs: "id",
                            status: 400,
                     });
              }
       }

       /*
              FindAll Role
       */
       async findAll(request: Request, response: Response): Promise<Response> {
              try {
                     const result = await rolesModel.findAll();
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       /*
              FindById Role
       */
       async findById(request: Request, response: Response): Promise<Response> {
              if (validator.isNumber(request.params.id)) {
                     const id: number = parseInt(request.params.id);
                     try {
                            const result = await rolesModel.findById(id);
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
                            inputs: "id",
                            status: 400,
                     });
              }
       }

       async findByRole(
              request: Request,
              response: Response
       ): Promise<Response> {
              if (validator.isValidate(request.body.role)) {
                     const role: string = request.body.role;
                     try {
                            const result = await rolesModel.findByRole(role);
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
                            inputs: "role",
                            status: 400,
                     });
              }
       }
}
