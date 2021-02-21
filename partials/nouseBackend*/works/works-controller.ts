import { Request, Response } from "express";
import IContoller from "../../../backend/src/api/IContoller";
import Works from "./works";
import Validator from "../../../backend/src/lib/validate/validator";
import SkillsModel from "./works-model";
import IDAOWorks from "./IDAOWorks";
import Errors from "../../../backend/src/exceptions/error/errors";

const validator: Validator = new Validator();
const modelWorks: IDAOWorks = new SkillsModel();

export default class WorksController implements IContoller<Request, Response> {
       constructor() {}

       async insert(request: Request, response: Response): Promise<Response> {
              const work: string = request.body.work;
              let user: number = 0;
              const id: number = 0;

              if (validator.isNumber(request.body.user)) {
                     user = parseInt(request.body.user);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "work, user",
                            status: 400,
                     });
              }
              if (validator.isValidate(work)) {
                     try {
                            const newWork: Works = {
                                   id,
                                   work,
                                   user,
                            };
                            const result = await modelWorks.insert(newWork);
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

       async update(request: Request, response: Response): Promise<Response> {
              const work: string = request.body.work;
              let user: number = 0;
              let id: number;
              if (
                     validator.isNumber(request.params.id) &&
                     validator.isNumber(request.body.user)
              ) {
                     id = parseInt(request.params.id);
                     user = parseInt(request.body.user);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id, work, user",
                            status: 400,
                     });
              }
              if (validator.isValidate(work)) {
                     try {
                            const newWork: Works = {
                                   id,
                                   work,
                                   user,
                            };
                            const result = await modelWorks.update(newWork);
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

       async delete(request: Request, response: Response): Promise<Response> {
              let id: number = 0;
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
                     const result = await modelWorks.delete(id);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async findAll(request: Request, response: Response): Promise<Response> {
              try {
                     const result: Works = await modelWorks.findAll();
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async findById(request: Request, response: Response): Promise<Response> {
              try {
                     const id: number = parseInt(request.params.id);
                     const result: Works = await modelWorks.findById(id);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async findByUser(
              request: Request,
              response: Response
       ): Promise<Response> {
              try {
                     const user: number = parseInt(request.params.user);
                     const result: Works = await modelWorks.findByUser(user);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }
}
