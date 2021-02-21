import Router from "express";

import routerUsers from "../api/users/users-router";
import routerInfo from "../api/info_users/info-router";
import routerRoles from "../api/roles/roles-router";
import routerSign from "../api/sign/sign-router";
import routerProfile from "../api/profile/profile-router";

const router = Router();

router.use("/users", routerUsers);

router.use("/info-users", routerInfo);

router.use("/roles", routerRoles);

router.use("/sign", routerSign);

router.use("/profile", routerProfile);

export default router;
