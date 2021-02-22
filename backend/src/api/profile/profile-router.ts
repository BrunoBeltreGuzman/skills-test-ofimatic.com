const { Router } = require("express");
const router = Router();

import ProfileController from "./profile-controller";
const profileController: ProfileController = ProfileController.getInstance();

import JWT from "../../lib/jwt/jwt";
import VerifyRole from "../../lib/jwt/verifyRole";

router.get(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       profileController.findAll
);

router.get(
       "/id/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       profileController.findById
);

router.get(
       "/name/:name",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       profileController.findByName
);

export default router;
