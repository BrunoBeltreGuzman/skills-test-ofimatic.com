const { Router } = require("express");
const router = Router();

import ControllerRoles from "./roles-controllers";
const controllerRole: ControllerRoles = ControllerRoles.getInstance();

import JWT from "../../lib/jwt/jwt";
import VerifyRole from "../../lib/jwt/verifyRole";

router.post("/", [JWT.verifyToken, VerifyRole.isAdmin], controllerRole.insert);

router.put(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdmin],
       controllerRole.update
);

router.delete(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdmin],
       controllerRole.delete
);

router.get("/", [JWT.verifyToken, VerifyRole.isAdmin], controllerRole.findAll);

router.get(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdmin],
       controllerRole.findById
);

export default router;
