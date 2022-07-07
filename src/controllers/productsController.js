import { db, ObjectId } from '../setup/db.js';

async function registerProducts (req, res) {

    const product = req.body;

    await db.collection("products").insertOne(product);

    res.sendStatus(201);
}

async function getAllProducts (req, res) {

    const products = await db.collection("products").find().toArray();

    if(products.length === 0) {
        return res.sendStatus(404);
    }
    
    res.status(200).send(products);
}

export { registerProducts, getAllProducts };