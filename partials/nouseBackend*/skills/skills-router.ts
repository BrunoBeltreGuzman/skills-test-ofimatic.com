const { Router } = require("express");
const router = Router();

import SkillsController from "./skills-controller";
const controllerSkills: SkillsController = new SkillsController();

router.post("/", controllerSkills.insert);

router.put("/:id", controllerSkills.update);

router.delete("/:id", controllerSkills.delete);

router.get("/", controllerSkills.findAll);

router.get("/:id", controllerSkills.findById);

router.get("/user/:user", controllerSkills.findByUser);

export default router;
