import { db } from '../setup/db.js';

async function saveCategory (req, res) {

    try {
        const category = req.body;
      
        await db.collection("categories").insertOne(category);

        res.sendStatus(201);

    } catch (error) {
        console.log("[Error] - saveCategories Controller");
        res.sendStatus(500);
    }
        
}

async function getAllCategories (req, res) {
    try {
        const product = await db.collection("categories").aggregate(
            [
                { $sort: { nome: 1, image: 1} },
                {
                    $group:
                        {
                            _id: "$nome",
                            image: { $first: "$image" }
                        }
                }
            ]
        ).toArray();
    
        if(!product || product.length === 0) {
            return res.sendStatus(404);
        }
        console.log(product);
        res.status(200).send(product); 
    } catch (error) {
        console.log("[Error] - getAllCategories Controller");
        res.sendStatus(500);
    }
        
}

export { saveCategory, getAllCategories };