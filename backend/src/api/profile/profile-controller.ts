import { Request, Response } from "express";
import IContoller from "../IContoller";
import Validator from "../../lib/validate/validator";
import Errors from "../../exceptions/error/errors";
import Bcrypt from "../../lib/bcrypt/bcrypt";
import ProfileModel from "./profile-model";

const profileModel: ProfileModel = new ProfileModel();
const validator: Validator = new Validator();

export default class ProfileController {
       constructor() {}

       async findAll(request: Request, response: Response): Promise<Response> {
              try {
                     const result = await profileModel.findAll();
                     return response.status(200).json(result);
              } catch (error) {
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async findById(request: Request, response: Response): Promise<Response> {
              try {
                     const id: number = parseInt(request.params.id);
                     const result = await profileModel.findById(id);
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
                     const result = await profileModel.findByName(name);
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }
}
