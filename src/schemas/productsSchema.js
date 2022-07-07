import joi from "joi";

const registerProductSchema = joi.object({
    nome: joi.string().min(1).trim().required(),
    preco: joi.number().min(1).required(),
    descricao: joi.string().min(1).trim().optional(),
    image: joi.string().min(1).trim().required(),
    categoria: joi.string().required(),
    tipo: joi.string().trim().required()
});

const typeSchema = joi.object({tipo: joi.string().trim().required()});

export { registerProductSchema, typeSchema };