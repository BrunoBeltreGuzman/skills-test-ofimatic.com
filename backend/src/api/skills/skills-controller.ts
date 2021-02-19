import { Request, Response } from "express";
import IContoller from "../IContoller";
import Skills from "./skills";
import Validator from "../../lib/validate/validator";
import SkillsModel from "./skills-model";
import IDAOUsers from "./IDAOSkills";
import Errors from "../../exceptions/error/errors";

const validator: Validator = new Validator();
const modelSkills: IDAOUsers = new SkillsModel();

export default class SkillsController implements IContoller<Request, Response> {
       constructor() {}

       async insert(request: Request, response: Response): Promise<Response> {
              const skill: string = request.body.skill;
              const user = request.body.user;
              const id: number = 0;

              if (validator.isValidate(skill) && validator.isValidate(user)) {
                     try {
                            const newSkill: Skills = {
                                   id,
                                   skill,
                                   user,
                            };
                            const result = await modelSkills.insert(newSkill);
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
                            inputs: "skill, user",
                            status: 400,
                     });
              }
       }

       async update(request: Request, response: Response): Promise<Response> {
              const skill = request.body.skill;
              const user = request.body.user;
              let id: number;

              if (validator.isNumber(request.params.id)) {
                     id = parseInt(request.params.id);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id, skill, user",
                            status: 400,
                     });
              }

              if (validator.isValidate(skill) && validator.isValidate(user)) {
                     try {
                            const newSkill: Skills = {
                                   id,
                                   skill,
                                   user,
                            };
                            const result = await modelSkills.update(newSkill);
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
                     const result = await modelSkills.delete(id);
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
                     const result: Skills = await modelSkills.findAll();
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
                     const result: Skills = await modelSkills.findById(id);
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
                     const result: Skills = await modelSkills.findByUser(user);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }
}
