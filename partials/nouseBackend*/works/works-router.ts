const { Router } = require("express");
const router = Router();

import WorksController from "./works-controller";
const controllerWorks: WorksController = new WorksController();

router.post("/", controllerWorks.insert);

router.put("/:id", controllerWorks.update);

router.delete("/:id", controllerWorks.delete);

router.get("/", controllerWorks.findAll);

router.get("/:id", controllerWorks.findById);

router.get("/user/:user", controllerWorks.findByUser);

export default router;
