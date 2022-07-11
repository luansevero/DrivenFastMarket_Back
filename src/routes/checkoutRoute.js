import { Router } from "express";
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';
import { validatePaymentData } from "../middlewares/checkoutValidationMiddleware.js";
import { placeOrder } from "../controllers/checkoutController.js";

const checkoutRoute = Router();

checkoutRoute.post("/checkout", tokenValidationMiddleware, validatePaymentData, placeOrder);

export default checkoutRoute;