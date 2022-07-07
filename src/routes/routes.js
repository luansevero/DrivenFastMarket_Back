import { Router } from "express";
import authRoute from "./authRoute.js";
import trolleyRoute from "./trolleyRoute.js";

const router = Router();

router.use(authRoute);
router.use(trolleyRoute);

export default router;
