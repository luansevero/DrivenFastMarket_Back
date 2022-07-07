import joi from "joi";

const registerProductSchema = joi.object({
    nome: joi.string().min(1).trim().required(),
    preco: joi.number().min(1).required(),
    descricao: joi.string().min(1).trim().optional(),
    image: joi.string().min(1).trim().required(),
    categoria: joi.string().valid("hortifruti", "acougue", "congelados", "padaria", "laticinios", "adega", "limpeza").required(),
    tipo: joi.number().min(1).required()
});

const categorySchema = joi.object({idCategoria: joi.string().valid("hortifruti", "acougue", "congelados", "padaria", "laticinios", "adega", "limpeza").required()});

export { registerProductSchema, categorySchema };