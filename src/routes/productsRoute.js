import { Router } from "express";
import { registerProducts, getAllProducts, getProductByName, updateProduct, deleteProduct, getAllProductsByCategoryAndType, getAllProductsByCategory } from '../controllers/productsController.js';
import { registerProductValidation, productTypeValidation, verifyIfProductIsAlreadyRegistered } from "../middlewares/productsValidationMiddleware.js";
import { categoryValidation } from "../middlewares/categoryValidationMiddleware.js";
import { tokenValidationMiddleware } from '../middlewares/tokenValidationMiddleware.js';

const productsRoute = Router();

// Objeto recebido pelo body do request
// {
//     "nome": "",
//     "preco": number,
//     "categoria": "",
//     "descricao": "",
//     "image": "",
//     "tipo": ""
// }
productsRoute.post("/registerProduct", tokenValidationMiddleware, categoryValidation, productTypeValidation, registerProductValidation,verifyIfProductIsAlreadyRegistered, registerProducts);

productsRoute.get("/getAllProducts", getAllProducts);

// O idCategoria é passado pelo parametro da rota, uma string representa o id da categoria. Só aceita categorias que já foram cadastradas.
productsRoute.get("/getAllProductsByCategory/:idCategoria", categoryValidation, getAllProductsByCategory);

// O idCategoria é passado pelo parametro da rota, uma string representa o id da categoria. Só aceita categorias que já foram cadastradas.
// O nome é passado pelo parametro da rota, uma string representa o nome do produto. Só aceita produtos que já foram cadastrados.
productsRoute.get("/getProductById/:idCategoria/:nomeProduto", categoryValidation, getProductByName);

// O nome é passado pelo parametro da rota, uma string representa o nome do produto. Só aceita produtos que já foram cadastrados.
// O campo a ser atualizado é passado pelo body do request, só aceita um campo por vez.
productsRoute.put("/updateProduct/:nomeProduto", tokenValidationMiddleware, updateProduct);

// O nomeProduto é passado pelo parametro da rota, uma string representa o id do produto. Só aceita produtos que já foram cadastrados.
// Necessario autenticar o usuario para deletar um produto.
productsRoute.delete("/deleteProduct/:nomeProduto", tokenValidationMiddleware, deleteProduct);

// O idCategoria é passado pelo parametro da rota, uma string representa o id da categoria. Só aceita categorias que já foram cadastradas.
// O tipo é passado pelo parametro da rota, uma string representa o tipo do produto. Só aceita tipos que já foram cadastrados.
productsRoute.get("/getAllProductsByType/:idCategoria/:tipoProduto", categoryValidation, getAllProductsByCategoryAndType);

export default productsRoute;