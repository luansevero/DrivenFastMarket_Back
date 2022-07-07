import { db, ObjectId } from '../setup/db.js';

async function registerProducts (req, res) {

    try {
        const product = req.body;

        await db.collection("products").insertOne(product);
    
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

        const product = await db.collection("products").find({categoria: idCategoria}).toArray();
    
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
        const nome = req.params.nomeProduto;
        const idCategoria = req.params.idCategoria;
    
        const product = await db.collection("products").findOne({nome, categoria: idCategoria});
    
        if(!product) {
            return res.sendStatus(404);
        }
    
        res.status(200).send(product);
    } catch (error) {
        console.log("[Error] - getProductByName Controller");
        res.sendStatus(500);
    }

}

// Receives a product object and updates it in the database
async function updateProduct (req, res) {

    try {
        const idProduto = req.params.nomeProduto;

        const updatedProduct = await db.collection("products").updateOne(
            { nome: idProduto }, 
            {$set: req.body}
        );
        
        if(!updatedProduct) {
            return res.sendStatus(404);
        }

        res.sendStatus(200);
    } catch (error) {
        console.log("[Error] - updateProduct Controller");
        res.sendStatus(500);
    }

}

// Receives a product object and deletes from database
async function deleteProduct (req, res) {
    try {
        const idProduto = req.params.nomeProduto;

        const deletedProduct = await db.collection("products").deleteOne({ nome: idProduto });

        if(!deletedProduct || deletedProduct.deletedCount === 0) {
            return res.sendStatus(404);
        }
        res.sendStatus(200);
    } catch (error) {
        console.log("[Error] - deleteProduct Controller");
        res.sendStatus(500);
    }
}

async function getAllProductsByCategoryAndType (req, res) {

    try {
        const idCategoria = req.params.idCategoria;
        const tipo = req.params.tipoProduto;

        const product = await db.collection("products").find({categoria: idCategoria, tipo}).toArray();
    
        if(!product || product.length === 0) {
            return res.sendStatus(404);
        }
    
        res.status(200).send(product);
    } catch (error) {
        console.log("[Error] - getAllProductsByCategoryAndType Controller");
        res.sendStatus(500);
    }
}

export { registerProducts, getAllProducts, getAllProductsById, getProductByName, updateProduct, deleteProduct, getAllProductsByCategoryAndType };