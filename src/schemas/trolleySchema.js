import joi from "joi";

const productShema = {
    nome: joi.string().min(1).trim().required(),
    preco: joi.number().min(1).required(),
    descricao: joi.string().min(1).trim().optional(),
    image: joi.string().min(1).trim().required(),
    categoria: joi.string().required(),
    tipo: joi.string().trim().required(),
}

const firstProductSchema = joi.object({
    ...productShema,
    amount: joi.number().valid(1).required(),
});

const alreadyInTrolleySchema = joi.object({
    ...productShema,
    amount: joi.number().valid(1, -1).required(),
    productId: joi.string().required()
});

export { firstProductSchema, alreadyInTrolleySchema }
