import { Router } from "express";
import trolley from "../controllers/TrolleyController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import trolleyValidate from "../middlewares/trolleySchemaValidationMiddleware.js";
import {searchCostumerProduct, searchProduct} from "../middlewares/trolleyValidationMiddleware.js";

const trolleyRoute = Router();

trolleyRoute.get('/carrinho',tokenValidationMiddleware, trolley.getProducts);
trolleyRoute.post('/carrinho',tokenValidationMiddleware, trolleyValidate.ProductSchema, searchProduct, trolley.postProduct);
trolleyRoute.put('/carrinho',tokenValidationMiddleware, trolleyValidate.ProductAmountSchema,searchProduct, trolley.changeProductQuantity);
trolleyRoute.delete('/carrinho/:productId',tokenValidationMiddleware, searchCostumerProduct, trolley.deleteProduct);

export default trolleyRoute
