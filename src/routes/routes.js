import { Router } from "express";
import authRoute from "./authRoute.js";
import trolleyRoute from "./trolleyRoute.js";
import productsRoute from "./productsRoute.js";
import categoryRoute from "./categoryRoute.js";
import checkoutRoute from "./checkoutRoute.js";

const router = Router();

router.use(authRoute);
router.use(trolleyRoute);
router.use(productsRoute);
router.use(categoryRoute);
router.use(checkoutRoute);

export default router;
