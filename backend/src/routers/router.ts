import express, { Router } from "express";
import path from "path";

import routerUsers from "../api/users/users-router";
import routerInfo from "../api/info_users/info-router";
import routerRoles from "../api/roles/roles-router";
import routerSign from "../api/sign/sign-router";
import routerProfile from "../api/profile/profile-router";
import routerImage from "../api/image_users/image-routers";

const router = Router();

router.use("/users", routerUsers);

router.use("/info-users", routerInfo);

router.use("/roles", routerRoles);

router.use("/sign", routerSign);

router.use("/profile", routerProfile);

router.use("/image", routerImage);

// this folders for this application will be used to store public file images
router.use("/uploads", express.static(path.resolve("uploads")));

export default router;
