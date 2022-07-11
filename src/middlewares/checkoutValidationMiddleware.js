import { paymentSchema } from "../schemas/checkoutSchema.js";

// validate the payment data
export const validatePaymentData = (req, res, next) => {
    const { error } = paymentSchema.validate(req.body.paymentInfo);
    console.log("Chegou no validatePaymentData");
    if (error) {
        return res.status(406).send(error.details[0].message);
    }
    next();
}