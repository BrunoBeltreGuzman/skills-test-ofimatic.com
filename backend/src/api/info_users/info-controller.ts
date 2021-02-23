import { Request, Response } from "express";
import IContoller from "../IContoller";
import Info from "./info";
import Validator from "../../lib/validate/validator";
import InfoModel from "./info-model";
import IDAOInfo from "./IDAOInfo";
import Errors from "../../exceptions/error/errors";

const validator: Validator = Validator.getInstance();
const modelInfo: IDAOInfo = InfoModel.getInstance();

export default class InfoController implements IContoller<Request, Response> {
       private constructor() {}

       private static instance: InfoController;

       static getInstance() {
              if (!InfoController.instance) {
                     InfoController.instance = new InfoController();
              }
              return InfoController.instance;
       }

       async insert(request: Request, response: Response): Promise<Response> {
              let id: number = 0;
              let user: number = 0;
              const description: string = request.body.description;
              const work: string = request.body.work;
              const skill: string = request.body.skill;
              const pais: string = request.body.pais;
              const telefono: string = request.body.telefono;
              const blog: string = request.body.blog;
              const facebook: string = request.body.facebook;
              const linkedin: string = request.body.linkedin;
              const github: string = request.body.github;
              const template: number = parseInt(request.body.template);

              if (validator.isNumber(request.body.user)) {
                     user = parseInt(request.body.user);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs:
                                   "user, description, work, pais, telefono, blog, facebook, linkedin, github",
                            status: 400,
                     });
              }

              try {
                     const newInfo: Info = {
                            id,
                            user,
                            description,
                            work,
                            skill,
                            pais,
                            telefono,
                            blog,
                            facebook,
                            linkedin,
                            github,
                            template,
                     };
                     const result = await modelInfo.insert(newInfo);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async update(request: Request, response: Response): Promise<Response> {
              let id: number = 0;
              let user: number = 0;
              const description: string = request.body.description;
              const work: string = request.body.trabajo;
              const skill: string = request.body.skill;
              const pais: string = request.body.pais;
              const telefono: string = request.body.telefono;
              const blog: string = request.body.blog;
              const facebook: string = request.body.facebook;
              const linkedin: string = request.body.linkedin;
              const github: string = request.body.github;
              const template: number = parseInt(request.body.template);
              if (
                     validator.isNumber(request.params.id) &&
                     validator.isNumber(request.body.user)
              ) {
                     id = parseInt(request.params.id);
                     user = parseInt(request.body.user);
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id, user",
                            status: 400,
                     });
              }

              try {
                     const newInfo: Info = {
                            id,
                            user,
                            description,
                            work,
                            skill,
                            pais,
                            telefono,
                            blog,
                            facebook,
                            linkedin,
                            github,
                            template,
                     };
                     const result = await modelInfo.update(newInfo);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
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
                     const result = await modelInfo.delete(id);
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
                     const result: Info = await modelInfo.findAll();
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
                     const result: Info = await modelInfo.findById(id);
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
                     const result: Info = await modelInfo.findByUser(user);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }
}
