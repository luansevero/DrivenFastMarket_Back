import { Router } from "express";
import trolley from "../controllers/TrolleyController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import trolleyValidate from "../middlewares/trolleySchemaValidationMiddleware.js";
import isProductAlreadyInCostumerTrolley from '../middlewares/trolleyValidationMiddleware.js';

const trolleyRoute = Router();

trolleyRoute.get('/carrinho',tokenValidationMiddleware, trolley.getProducts);
trolleyRoute.post('/carrinho',tokenValidationMiddleware, trolleyValidate.ProductSchema,isProductAlreadyInCostumerTrolley, trolley.postProduct);
trolleyRoute.put('/carrinho',tokenValidationMiddleware, trolleyValidate.ProductAmountSchema, trolley.changeProductQuantity);
trolleyRoute.delete('/carrinho',tokenValidationMiddleware,trolleyValidate.ProductSchema, trolley.deleteProduct);

export default trolleyRoute
