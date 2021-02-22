const { Router } = require("express");
const router = Router();

import UsersController from "./users-controller";
const controllerUsers: UsersController = UsersController.getInstance();

import JWT from "../../lib/jwt/jwt";
import VerifyRole from "../../lib/jwt/verifyRole";

router.post(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.insert
);

router.put(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.update
);

router.put(
       "/updatedata/:user",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.updateData
);

router.put(
       "/changepassword/:user",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.changePassword
);

router.delete(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.delete
);

router.get(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.findAll
);

router.get(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.findById
);

router.get(
       "/name/:name",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       controllerUsers.findByName
);

export default router;
