const { Router } = require("express");
const router = Router();

import InfoController from "./info-controller";
const controllerInfo: InfoController = new InfoController();

router.post("/", controllerInfo.insert);

router.put("/:id", controllerInfo.update);

router.delete("/:id", controllerInfo.delete);

router.get("/", controllerInfo.findAll);

router.get("/:id", controllerInfo.findById);

router.get("/user/:user", controllerInfo.findByUser);

export default router;
