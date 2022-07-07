import { Router } from "express";
import trolley from "../controllers/TrolleyController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import { registerProductValidation } from "../middlewares/productsValidationMiddleware.js";

const trolleyRoute = Router();

trolleyRoute.get('/carrinho',tokenValidationMiddleware, trolley.getProducts);
trolleyRoute.post('/carrinho',tokenValidationMiddleware,registerProductValidation, trolley.postProduct);
trolleyRoute.put('/carrinho',tokenValidationMiddleware, trolley.changeProductQuantity);
trolleyRoute.delete('/carrinho',tokenValidationMiddleware,registerProductValidation, trolley.deleteProduct);

export default trolleyRoute
