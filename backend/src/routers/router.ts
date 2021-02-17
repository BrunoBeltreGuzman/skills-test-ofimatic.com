import Router from "express";

import routerUsers from "../api/users/users-router";

const router = Router();

router.use("/users", routerUsers);

export default router;
