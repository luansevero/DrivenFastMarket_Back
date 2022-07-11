import joi from "joi";

const paymentSchema = joi.object({
    cardName: joi.string().min(1).trim().required(),
    cardNumber: joi.string().creditCard().trim().required(),
    cardValidade: joi.string().min(5).max(5).trim().required(),
    cardSecurityCode: joi.number().max(999).required()
});

export { paymentSchema };