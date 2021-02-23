import { Request, Response } from "express";
import fs from "fs-extra";
import path from "path";
import Validator from "../../lib/validate/validator";
import Image from "./image";
import ImaModel from "./image-model";
import Errors from "../../exceptions/error/errors";

const imaModel: ImaModel = ImaModel.getInstance();
const validator: Validator = Validator.getInstance();

export default class ImageController {
       private constructor() {}

       private static instance: ImageController;

       static getInstance() {
              if (!ImageController.instance) {
                     ImageController.instance = new ImageController();
              }
              return ImageController.instance;
       }

       async insert(request: Request, response: Response): Promise<Response> {
              console.log(request.file);
              console.log(request.body);
              const id = 0;
              const user = request.body.user;

              const {
                     originalname,
                     mimetype,
                     filename,
                     path,
                     size,
              } = request.file;

              if (
                     validator.isNumber(request.body.user) &&
                     validator.isValidate(originalname) &&
                     validator.isValidate(mimetype) &&
                     validator.isValidate(filename) &&
                     validator.isValidate(path)
              ) {
                     try {
                            const image: Image = {
                                   id,
                                   user,
                                   originalname,
                                   mimetype,
                                   filename,
                                   path,
                                   size,
                            };
                            const result = await imaModel.insert(image);
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
                            inputs: "user, file",
                            status: 400,
                     });
              }
       }

       async update(request: Request, response: Response): Promise<Response> {
              console.log(request.file);
              console.log(request.body);
              const id: number = parseInt(request.params.id);
              const user: number = parseInt(request.body.user);

              const { originalname, mimetype, filename, size } = request.file;

              const pathImage = request.file.path;
              if (
                     validator.isNumber(request.body.user) &&
                     validator.isValidate(originalname) &&
                     validator.isValidate(mimetype) &&
                     validator.isValidate(filename) &&
                     validator.isValidate(pathImage)
              ) {
                     try {
                            const newImage: Image = {
                                   id,
                                   user,
                                   originalname,
                                   mimetype,
                                   filename,
                                   path: pathImage,
                                   size,
                            };

                            const image = await imaModel.findById(id);
                            if (image[0]) {
                                   await fs.remove(path.resolve(image[0].path));
                            } else {
                                   await fs.remove(path.resolve(pathImage));
                                   return response.status(400).json({
                                          message:
                                                 "Inputs incomplete, All input required",
                                          inputs: "id, user",
                                          status: 400,
                                   });
                            }
                            const result = await imaModel.update(newImage);
                            return response
                                   .status(200)
                                   .json([image[0], result]);
                     } catch (error) {
                            console.log(Errors.HandlingError(error));
                            return response
                                   .status(500)
                                   .json(Errors.HandlingError(error));
                     }
              } else {
                     return response.status(400).json({
                            message: "Inputs incomplete, All input required",
                            inputs: "id, file",
                            status: 400,
                     });
              }
       }

       async delete(request: Request, response: Response): Promise<Response> {
              let id: number = 0;
              if (validator.isNumber(request.params.id)) {
                     id = parseInt(request.params.id);
                     try {
                            const image = await imaModel.findById(id);
                            if (image[0]) {
                                   await fs.remove(path.resolve(image[0].path));
                            }
                            const result = await imaModel.delete(id);
                            return response
                                   .status(200)
                                   .json([image[0], result]);
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

       async findAll(request: Request, response: Response): Promise<Response> {
              try {
                     const result = await imaModel.findAll();
                     return response.status(200).json(result);
              } catch (error) {
                     console.log(Errors.HandlingError(error));
                     return response
                            .status(500)
                            .json(Errors.HandlingError(error));
              }
       }

       async findById(request: Request, response: Response): Promise<Response> {
              let id: number = 0;
              if (validator.isNumber(request.params.id)) {
                     try {
                            id = parseInt(request.params.id);
                            const result = await imaModel.findById(id);
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

       async findByUser(
              request: Request,
              response: Response
       ): Promise<Response> {
              let user: number = 0;
              if (validator.isNumber(request.params.user)) {
                     try {
                            user = parseInt(request.params.user);
                            const result = await imaModel.findByUser(user);
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
                            inputs: "user",
                            status: 400,
                     });
              }
       }
}
