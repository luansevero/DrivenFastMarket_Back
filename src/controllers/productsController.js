import { db, ObjectId } from '../setup/db.js';

async function registerProducts (req, res) {

    const product = req.body;

    await db.collection("products").insertOne(product);

    res.sendStatus(200);
}

export { registerProducts };