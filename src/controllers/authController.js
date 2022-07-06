import bycrypt from 'bcrypt';
import { db, ObjectId } from '../setup/db.js';
import { v4 as uuid } from 'uuid';

async function signUp(req,res){
    const costumer = req.body;
    try{
        const haveCostumer = await db.collection('costumers').findOne({email:costumer.email});
        if(haveCostumer){return res.status(400).send('Email já em uso')};

        const passwordHash = bycrypt.hashSync(costumer.password, 10);
        await db.collection('costumers').insertOne({...costumer, password: passwordHash});

        return res.sendStatus(201);
    }catch(error){
        console.log("[Error] - SignUp Controller")
        return res.sendStatus(500);
    }

}

async function signIn(req,res){
    const { email, password } = req.body;

    try{
        const costumer = await db.collection('costumers').findOne({ email });
        const isPasswordRight = bycrypt.compareSync(password, costumer.password);
        if(!costumer || !isPasswordRight){return res.sendStatus(401)}

        const token = uuid();
        await db.collection('sessions').insertOne({token, userId: costumer._id});

        res.send({token:token})
    }catch(error){
        console.log("[Error] - SignIn Controller")
        res.sendStatus(500);
    }

}

export { signUp, signIn }