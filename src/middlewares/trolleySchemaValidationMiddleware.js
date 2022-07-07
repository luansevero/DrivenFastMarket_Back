import { firstProductSchema, alreadyInTrolleySchema } from '../schemas/trolleySchema';

const trolleyValidate = {
    postProductSchema: async function(req,res,next) {
        try{
            const product = req.body;
            const validation = firstProductSchema.validate(product);
            if(validation.error){return res.sendStatus(422)};
            next()
        }catch(error){
            console.log("[Error] - postProductSchema Trolley Middleware");
            res.sendStatus(500);
        }
    },
    changeAmoutSchema: async function(req,res,next){
        try{
            const product = req.body;
            const validation = alreadyInTrolleySchema.validate(product);
            if(validation.error){return res.sendStatus(422)};
            next();
        }catch(error){
            console.log("[Error] - changeAmoutSchema Trolley Middleware");
            res.sendStatus(500);
        }
    }
}

export default trolleyValidate