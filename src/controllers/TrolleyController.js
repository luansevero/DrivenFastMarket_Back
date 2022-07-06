import { reset } from 'nodemon';
import { db } from '../setup/db.js';

const trolley = {
    postProduct: async function(req,res){
        const { costumer } = res.locals;
        const product = req.body;
        try{
            await db.collection('trolleyProducts').insertOne({...product, userId: costumer._id})
            res.sendStatus(200);
        }catch(error){
            console.log("[Error] - postProduct Trolley Controller");
            res.sendStatus(500);
        }
    }
}