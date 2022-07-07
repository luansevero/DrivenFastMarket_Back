import { Router } from "express";
import trolley from "../controllers/TrolleyController.js";

const trolleyRoute = Router();

trolleyRoute.get('/carrinho', trolley.getProducts);
trolleyRoute.post('/carrinho', trolley.postProduct);
trolleyRoute.put('/carrinho', trolley.changeProductQuantity);
trolleyRoute.delete('/carrinho', trolley.deleteProduct);

export default trolleyRoute
