import joi from "joi";

const paymentSchema = joi.object({
    cardName: joi.string().min(1).trim().required(),
    cardNumber: joi.string().min(16).max(20).trim().required(),
    cardSecurityCode: joi.string().min(3).max(3).trim().required(),
    cardValidade: joi.string().min(5).trim().required()
});

export { paymentSchema };