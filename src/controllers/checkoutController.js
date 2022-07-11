import bycrypt from 'bcrypt';
import { db, ObjectId } from '../setup/db.js';
import { v4 as uuid } from 'uuid';

async function placeOrder (req, res) {
    const order = req.body;
    const { costumer } = res.locals;
    try {
        const trolley = await db.collection('trolley-products').find({ userId: costumer._id }, { projection: { _id: 0, userId: 0 } }).toArray();
        if (!trolley) {
            return res.sendStatus(406);
        }

        const orderData = {
            orderId: uuid(),
            userId: costumer._id,
            orderData: order
        }

        await db.collection('orders').insertOne(orderData);
        await db.collection('trolley-products').deleteMany({ userId: costumer._id });
        res.send(orderData);

    } catch (error) {
        console.log("[Error] - PlaceOrder Controller")
        return res.sendStatus(500);
    }
}
export { placeOrder } ;