const { Router } = require("express");
const router = Router();

import UsersController from "./users-controller";
const controllerUsers: UsersController = UsersController.getInstance();

router.post("/", controllerUsers.insert);

router.put("/:id", controllerUsers.update);

router.put("/updatedata/:user", controllerUsers.updateData);

router.put("/changepassword/:user", controllerUsers.changePassword);

router.delete("/:id", controllerUsers.delete);

router.get("/", controllerUsers.findAll);

router.get("/:id", controllerUsers.findById);

router.get("/name/:name", controllerUsers.findByName);

export default router;
