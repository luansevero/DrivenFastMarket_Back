import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

function signUpValidation(req,res,next){
        const costumer = req.body;
        const validation = signUpSchema.validate(costumer);
        console.log(validation.error)
        if(validation.error){return res.sendStatus(400)};
        next();
}

function signInValidation(req,res,next){
        const { email, password } = req.body;
        const validation = signInSchema.validate({email:email, password:password});
        if(validation.error){return res.sendStatus(400)};
        next();
}

export { signInValidation, signUpValidation }