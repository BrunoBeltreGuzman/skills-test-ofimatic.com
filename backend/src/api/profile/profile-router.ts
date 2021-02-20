const { Router } = require("express");
const router = Router();

import ProfileController from "./profile-controller";
const profileController: ProfileController = new ProfileController();

router.get("/", profileController.findAll);

router.get("/id/:id", profileController.findById);

router.get("/name/:name", profileController.findByName);

export default router;
