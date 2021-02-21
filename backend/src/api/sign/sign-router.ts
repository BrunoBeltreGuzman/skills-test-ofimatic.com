const { Router } = require("express");
const router = Router();

import SignController from "./sign-controllers";
const signController: SignController = SignController.getInstance();

import JWT from "../../lib/jwt/jwt";
import VerifyRole from "../../lib/jwt/verifyRole";

router.post("/signin", [VerifyRole.all], signController.signin);

router.post("/signup", [VerifyRole.all], signController.signup);

export default router;
