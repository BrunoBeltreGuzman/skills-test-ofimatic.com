const { Router } = require("express");
const router = Router();

import UsersController from "./users-controller";
const controllerUsers: UsersController = new UsersController();

router.post("/", controllerUsers.insert);

router.put("/:id", controllerUsers.update);

router.delete("/:id", controllerUsers.delete);

router.get("/", controllerUsers.findAll);

router.get("/:id", controllerUsers.findById);

router.get("/name/:name", controllerUsers.findByName);

export default router;
