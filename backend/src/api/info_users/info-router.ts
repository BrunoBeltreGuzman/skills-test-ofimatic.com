const { Router } = require("express");
const router = Router();

import InfoController from "./info-controller";
const controllerInfo: InfoController = InfoController.getInstance();

import JWT from "../../lib/jwt/jwt";
import VerifyRole from "../../lib/jwt/verifyRole";

router.post(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerInfo.insert
);

router.put(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerInfo.update
);

router.delete(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerInfo.delete
);

router.get(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerInfo.findAll
);

router.get(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerInfo.findById
);

router.get(
       "/user/:user",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerInfo.findByUser
);

export default router;
