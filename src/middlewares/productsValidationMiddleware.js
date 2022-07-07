import { db } from '../setup/db.js'
import { registerProductSchema } from "../schemas/productsSchema.js";

async function registerProductValidation(req, res, next) {
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
}

export { registerProductValidation };