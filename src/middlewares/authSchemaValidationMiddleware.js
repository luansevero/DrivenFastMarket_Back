import { signInSchema, signUpSchema } from "../schemas/authSchema";

function signInValidation(req,res,next){
        const costumer = req.body;
        const validation = signInSchema.validate(costumer);
        if(validation.error){return res.sendStatus(400)};
        next();
}

function signUpValidation(req,res,next){
        const { email, password } = req.body;
        const validation = signUpSchema.validate({email:email, password:password});
        if(validation.error){return res.sendStatus(400)};
        next();
}

export { signInValidation, signUpValidation }