import { db } from '../setup/db.js'
import { registerProductSchema, categorySchema } from "../schemas/productsSchema.js";

async function registerProductValidation(req, res, next) {

    try {
        const product = req.body;
        const validation = registerProductSchema.validate(product);
        if (validation.error) {
            return res.sendStatus(422);
        }
    
        const verifyIfProductIsAlreadyRegistered = await db.collection("products").findOne({ nome: product.nome });
        if (verifyIfProductIsAlreadyRegistered) {
            return res.status(409).send("Produto já cadastrado");
        }
        next();   
    } catch (error) {
        console.log("[Error] - registerProductValidation Middleware");
        res.sendStatus(500);
    }
}

function categoryValidation (req, res, next) {
    const idCategoria = req.params.idCategoria;
    const validation = categorySchema.validate({idCategoria});
    if (validation.error) {
        return res.sendStatus(422);
    }
    next();
}

export { registerProductValidation, categoryValidation };