import { Router } from "express";
import { registerProducts, getAllProducts, getAllProductsById, getProductByName } from '../controllers/productsController.js';
import { registerProductValidation, categoryValidation } from "../middlewares/productsValidationMiddleware.js";
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';

const productsRoute = Router();

productsRoute.post("/registerProduct", tokenValidationMiddleware, registerProductValidation, registerProducts);
productsRoute.get("/getAllProducts", getAllProducts);

// O idCategoria pode ser um dos seguintes valores: hortifruti, acougue, congelados, padaria, laticinios, adega, limpeza . 
// No salvamento eles sao convertidos para um inteiro de 1 a 7.
productsRoute.get("/getAllProductsById/:idCategoria", categoryValidation, getAllProductsById);
productsRoute.get("/getProductById/:idCategoria/:idProduto", categoryValidation, getProductByName);

export default productsRoute;