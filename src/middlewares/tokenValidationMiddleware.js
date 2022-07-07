import { db } from '../setup/db.js'

async function tokenValidationMiddleware(req,res,next){
    const { authorization } = req.headers;
    try{
        const token = authorization?.replace('Bearer ', '')
        console.log(token)
        if (!token) {return res.sendStatus(401)}
        
        const session = await db.collection('sessions').findOne({token});
        if (!session) {return res.sendStatus(401)}

        const costumer = await db.collection('costumers').findOne({ _id: session.userId });
        if (!costumer) {return res.sendStatus(401);}

        res.locals.costumer = costumer;
        next();
    }catch(error){
        console.log("[Erro] - Falha em Token Middleware")
        res.sendStatus(error)
    }
}

export { tokenValidationMiddleware };