import Router from "express";

import routerUsers from "../api/users/users-router";
import routerSkills from "../api/skills/skills-router";
import routerWorks from "../api/works/works-router";
import routerInfo from "../api/info_users/info-router";

const router = Router();

router.use("/users", routerUsers);

router.use("/skills", routerSkills);

router.use("/works", routerWorks);

router.use("/info-users", routerInfo);

export default router;
