import { db } from '../setup/db.js';

async function searchProduct(req,res,next){
    const { costumer } = res.locals;
    const product = req.body;
    try{
        const trolleyProduct = await db.collection("trolley-products").findOne({ userId: costumer._id, nome: product.nome });
        res.locals.trolleyProduct = trolleyProduct;
        next()
    }catch(error){
        console.log("[Error] - isProductAlreadyInCostumerTrolley Middleware")
    }
}

async function searchCostumerProduct(req,res,next){
    const { costumer } = res.locals;
    const { productId } = req.params;
    try{
        const trolleyProduct = await db.collection("trolley-products").findOne({ userId: costumer._id, productId: productId });
        res.locals.trolleyProduct = trolleyProduct;
        next()
    }catch(error){
        console.log("[Error] - isProductAlreadyInCostumerTrolley Middleware")
    }
}

export default searchProduct;