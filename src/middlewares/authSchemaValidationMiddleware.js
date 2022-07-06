import { signInSchema, signUpSchema } from "../schemas/authSchema";

const authSchema = {
    signInValidation: function(req,res,next){
        const costumer = req.body;
        const validation = signInSchema.validate(costumer);
        if(validation.error){return res.sendStatus(400)};
        next();
    },
    singUpValidation: function(req,res,next){
        const { email, password } = req.body;
        const validation = signUpSchema.validate({email:email, password:password});
        if(validation.error){return res.sendStatus(400)};
        next();
    }
}

export default authSchema