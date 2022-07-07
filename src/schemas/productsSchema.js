import joi from "joi";

const registerProductSchema = joi.object({
    nome: joi.string().min(1).trim().required(),
    preco: joi.number().min(1).required(),
    descricao: joi.string().min(1).trim().optional(),
    image: joi.string().min(1).trim().required(),
    categoria: joi.number().min(1).required(),
    tipo: joi.number().min(1).required()
});

export { registerProductSchema };