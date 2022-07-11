import { Router } from "express";
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';
import { placeOrder } from "../controllers/checkoutController.js";

const checkoutRoute = Router();

checkoutRoute.post("/checkout", tokenValidationMiddleware, placeOrder);

export default checkoutRoute;