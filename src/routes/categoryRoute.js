import { Router } from "express";
import { tokenValidationMiddleware } from "../middlewares/tokenValidationMiddleware.js";
import { saveCategoryValidation } from "../middlewares/categoryValidationMiddleware.js";
import { saveCategory, getAllCategories } from "../controllers/categoryController.js";

const categoryRoute = Router();

// Necessario autenticacao para cadastrar uma categoria.
// Objeto recebido pelo body do request
// {
//     "nome": "",
//     "tipo": "",
//     "image": ""
// }
categoryRoute.post("/saveCategory", tokenValidationMiddleware, saveCategoryValidation, saveCategory);
categoryRoute.get("/getAllCategories", getAllCategories);

export default categoryRoute;