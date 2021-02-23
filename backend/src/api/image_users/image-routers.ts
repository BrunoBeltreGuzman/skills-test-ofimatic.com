const { Router } = require("express");
const router = Router();

import multerjs from "../../lib/multer/multerjs";
import ImageController from "./image-controller";

const imageController: ImageController = ImageController.getInstance();

import JWT from "../../lib/jwt/jwt";
import VerifyRole from "../../lib/jwt/verifyRole";

router.post(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       multerjs.single("image"),
       imageController.insert
);

router.put(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       multerjs.single("image"),
       imageController.update
);

router.delete(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       imageController.delete
);

router.get(
       "/",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       imageController.findAll
);

router.get(
       "/:id",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       imageController.findById
);

router.get(
       "/user/:user",
       [JWT.verifyToken, VerifyRole.isAdminOrUser],
       imageController.findByUser
);

export default router;
