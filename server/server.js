// Modules
import express from 'express';
import * as dotenv from 'dotenv';
import axios from 'axios';
import mongoose from 'mongoose';


import './db/connection.js';

import newsRouter from './routes/newsRoutes.js';
import categoryRoutes from './routes/categories.js';
import userRouter from './routes/usersRoutes.js';



const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;



// GET routes
app.use('/news', newsRouter);     
app.use('/categories', categoryRoutes);
app.use('/users', userRouter);


app.listen(PORT||6000, ()=> {
  console.log(`Running on port ${PORT}`)
})

