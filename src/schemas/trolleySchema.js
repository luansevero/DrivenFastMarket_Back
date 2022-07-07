import joi from "joi";
import { registerProductSchema} from "./productsSchema";

const firstProductSchema = joi.object({
    ...registerProductSchema,
    amount: joi.number().valid(1).required(),
});

const alreadyInTrolleySchema = joi.object({
    ...registerProductSchema,
    amount: joi.number().valid(1, -1).required(),
    productId: joi.string().required()
});

export { firstProductSchema, alreadyInTrolleySchema }
