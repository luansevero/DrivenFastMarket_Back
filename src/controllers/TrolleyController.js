
import { db } from '../setup/db.js';

const trolley = {
    postProduct: async function(req,res){
        const { costumer } = res.locals;
        const { trolleyProduct } = res.locals;
        const product = req.body;
        
        try{
            if(trolleyProduct){
                console.log('Esse produto já está no carrinho')
                return res.sendStatus(406)
            }

            await db.collection('trolley-products').insertOne({...product, userId: costumer._id, productId: `${product.categoria}.${product.tipo}.${product.nome}`})

            res.sendStatus(201);
        }catch(error){
            console.log("[Error] - postProduct Trolley Controller");
            res.sendStatus(500);
        }
    },
    getProducts: async function(req,res){
        const { costumer } = res.locals;

        try{
            const costumerTrolley = await db.collection('trolley-products').find({userId: costumer._id},{projection:{_id:0, userId:0}}).toArray();
            if(!costumerTrolley){return res.send([])};

            const productValues = await db.collection('trolley-products').aggregate([
                {$match: {userId: costumer._id}},
                {$project: {
                    _id: 0,
                    nome: "$nome",
                    total:{$multiply:["$amount" , "$preco"]}
                }}
            ]).toArray();
            
            const subtotal = productValues.map(product => product.total)

            res.send({produts:costumerTrolley, productsValue:productValues, subtotal:subtotal.reduce((a,b) => a + b, 0)});
        }catch(error){
            console.log("[Error] - getProducts Trolley Controller");
            res.sendStatus(500);
        }
    },
    changeProductQuantity: async function(req,res){
        const { costumer } = res.locals;
        const { trolleyProduct } = res.locals;
        const product = req.body;
        try{
            if(trolleyProduct.amount === 1 && product.amount === -1){return res.sendStatus(406)};

            await db.collection('trolley-products').updateOne(
                {userId: costumer._id, productId: product.productId},
                {$inc: {amount: parseInt(product.amount)}}
            )

            res.sendStatus(200);
        }catch(error){
            console.log("[Error] - changeProductQuantity Trolley Controller");
            res.sendStatus(500);
        }
    },
    deleteProduct: async function(req,res){
        const { costumer } = res.locals;
        const { trolleyProduct } = res.locals;
        const product = req.body;
        try{
            if(!trolleyProduct){return res.sendStatus(404)};

            await db.collection('trolley-products').deleteOne({userId: costumer._id, productId: product.productId});

            res.sendStatus(200);
        }catch(error){
            console.log("[Error] - deleteProduct Trolley Controller");
            res.sendStatus(500);
        }
    }
}


export default trolley