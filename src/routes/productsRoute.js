import { Router } from "express";
import { registerProducts, getAllProducts } from '../controllers/productsController.js';
import { registerProductValidation } from "../middlewares/productsValidationMiddleware.js";
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';

const productsRoute = Router();

productsRoute.post("/registerProduct", tokenValidationMiddleware, registerProductValidation, registerProducts);
productsRoute.get("/getAllProducts", getAllProducts);

export default productsRoute;