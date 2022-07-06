import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import router from './routes/routes.js';

const server = express();
server.use(cors());
server.use(json());
server.use(router);


const PORT = process.env.PORT
server.listen(PORT, () =>{console.log(`Server listening on ${PORT}`)})