import { db } from '../setup/db.js'
import { registerProductSchema, typeSchema } from "../schemas/productsSchema.js";

async function registerProductValidation(req, res, next) {

    try {
        const product = req.body;
        const validation = registerProductSchema.validate(product);
        if (validation.error) {
            return res.sendStatus(422);
        }
        next();   
    } catch (error) {
        console.log("[Error] - registerProductValidation Middleware");
        res.sendStatus(500);
    }
}

async function verifyIfProductIsAlreadyRegistered(req,res,next){
    const product = req.body;
    try{
        const verifyIfProductIsAlreadyRegistered = await db.collection("products").findOne({ nome: product.nome });
        if (verifyIfProductIsAlreadyRegistered) {
            return res.status(409).send("Produto já cadastrado");
        }
        next()
    }catch(error){
        console.log("[Error] - verifyIfProductIsAlreadyRegistered Middleware")
    }
    next()
}

async function productTypeValidation (req, res, next) {
    const category = req.body;
    const checkIfTypeExists = await db.collection("categories").findOne({ tipo: category.tipo });

    if (!checkIfTypeExists){
        return res.status(409).send("Tipo não cadastrado");
    }

    next();
}

export { registerProductValidation, productTypeValidation, verifyIfProductIsAlreadyRegistered };