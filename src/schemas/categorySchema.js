import joi from "joi";

const categorySchema = joi.object({idCategoria: joi.string().trim().required()});

const saveCategorySchema = joi.object({
    nome: joi.string().min(1).trim().required(),
    descricao: joi.string().min(1).trim().optional(),
    image: joi.string().min(1).trim().required(),
    tipo: joi.string().trim().required()
});

export { categorySchema, saveCategorySchema };