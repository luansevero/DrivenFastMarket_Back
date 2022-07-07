import { Router } from "express";
import trolley from "../controllers/TrolleyController.js";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import trolleyValidate from "../middlewares/trolleySchemaValidationMiddleware.js";
import searchProduct from "../middlewares/trolleyValidationMiddleware.js";

const trolleyRoute = Router();

trolleyRoute.get('/carrinho',tokenValidationMiddleware, trolley.getProducts);
trolleyRoute.post('/carrinho',tokenValidationMiddleware, trolleyValidate.ProductSchema, searchProduct, trolley.postProduct);
trolleyRoute.put('/carrinho',tokenValidationMiddleware, trolleyValidate.ProductAmountSchema,searchProduct, trolley.changeProductQuantity);
trolleyRoute.delete('/carrinho',tokenValidationMiddleware,trolleyValidate.ProductAmountSchema, searchProduct, trolley.deleteProduct);

export default trolleyRoute
