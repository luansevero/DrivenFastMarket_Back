import { Router } from "express";
import authRoute from "./authRoute.js";
import productsRoute from "./productsRoute.js";

const router = Router();

router.use(authRoute);
router.use(productsRoute);

export default router;
