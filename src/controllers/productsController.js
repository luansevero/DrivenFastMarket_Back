import { db, ObjectId } from '../setup/db.js';

const dictCategorias = {
    "hortifruti": 1,
    "acougue": 2,
    "congelados": 3,
    "padaria": 4,
    "laticinios": 5,
    "adega": 6,
    "limpeza": 7
}

async function registerProducts (req, res) {

    try {
        const product = req.body;

        await db.collection("products").insertOne({...product, categoria: dictCategorias[product.categoria]});
    
        res.sendStatus(201);
    } catch (error) {
        console.log("[Error] - registerProducts Controller");
        res.sendStatus(500);
    }
}

async function getAllProducts (req, res) {

    try {
        const product = await db.collection("products").find().toArray();
    
        if(!product || product.length === 0) {
            return res.sendStatus(404);
        }
    
        res.status(200).send(product);
    } catch (error) {
        console.log("[Error] - getAllProducts Controller");
        res.sendStatus(500);
    }
}

async function getAllProductsById (req, res) {

    try {
        const idCategoria = req.params.idCategoria;

        const product = await db.collection("products").find({categoria: dictCategorias[idCategoria]}).toArray();
    
        if(!product || product.length === 0) {
            return res.sendStatus(404);
        }
    
        res.status(200).send(product);
    } catch (error) {
        console.log("[Error] - getAllProductsById Controller");
        res.sendStatus(500);
    }

}

async function getProductByName (req, res) {

    try {
        const nome = req.params.idProduto;
        const idCategoria = req.params.idCategoria;
    
        const product = await db.collection("products").findOne({nome, categoria: dictCategorias[idCategoria]});
    
        if(!product) {
            return res.sendStatus(404);
        }
    
        res.status(200).send(product);
    } catch (error) {
        console.log("[Error] - getProductByName Controller");
        res.sendStatus(500);
    }

}

export { registerProducts, getAllProducts, getAllProductsById, getProductByName };