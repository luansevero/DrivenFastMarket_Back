import { db } from '../setup/db.js';

async function isProductAlreadyInCostumerTrolley(req,res,next){
    const { costumer } = res.locals;
    const product = req.body;
    try{
        const isProductAlreadyInCostumerTrolley = await db.collection("trolley-products").findOne({ userId: costumer._id, nome: product.nome });
        if (isProductAlreadyInCostumerTrolley) {
            return res.status(409).send("Esse produto já esta no carrinho!");
        }
        next()
    }catch(error){
        console.log("[Error] - isProductAlreadyInCostumerTrolley Middleware")
    }
    
}

export default isProductAlreadyInCostumerTrolley;