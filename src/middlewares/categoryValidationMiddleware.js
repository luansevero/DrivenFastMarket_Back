import { db } from '../setup/db.js'
import { saveCategorySchema } from "../schemas/categorySchema.js";

async function categoryValidation (req, res, next) {
    const idCategoria = req.params.idCategoria;
    let checkIfCategoryExists;
    
    if (req.params && req.params.idCategoria) {
        checkIfCategoryExists = await db.collection("categories").findOne({ nome: idCategoria });
    }else{
        checkIfCategoryExists = await db.collection("categories").findOne({ nome: req.body.categoria });
    }


    if (!checkIfCategoryExists || checkIfCategoryExists.length === 0){
        return res.status(409).send("Categoria não cadastrada");
    }
    next();
}

async function saveCategoryValidation (req, res, next) {
    const category = req.body;
    const validation = saveCategorySchema.validate(category);

    const checkIfCategoryExists = await db.collection("categories").find({ nome: category.nome }).toArray();


    if (validation.error) {
        return res.sendStatus(422);
    }
    if (checkIfCategoryExists){
        const checkIfTypeExists = await db.collection("categories").findOne({ tipo: category.tipo });
        if (checkIfTypeExists){
            return res.status(409).send("Categoria e tipo já cadastrados");
        }
    }

    next();
}


export { categoryValidation, saveCategoryValidation };