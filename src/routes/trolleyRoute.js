import { Router } from "express";
import trolley from "../controllers/TrolleyController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const trolleyRoute = Router();

trolleyRoute.get('/carrinho',tokenValidationMiddleware, trolley.getProducts);
trolleyRoute.post('/carrinho',tokenValidationMiddleware, trolley.postProduct);
trolleyRoute.put('/carrinho',tokenValidationMiddleware, trolley.changeProductQuantity);
trolleyRoute.delete('/carrinho',tokenValidationMiddleware, trolley.deleteProduct);

export default trolleyRoute
