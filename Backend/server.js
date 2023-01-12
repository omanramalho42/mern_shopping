import express from "express"
import cors from 'cors'

import data from "./data.js"

import dotenv from 'dotenv'
import mongoose from "mongoose";

import path from 'path';

import productRouter from './routes/productRoutes.js';
import seedRouter from "./routes/seedRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from './routes/orderRoutes.js';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("connected to mongoose db");
}).catch(error => console.log(error));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '/frontend/build/index.html'));
})


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is Running on port: http://localhost:"+port);
});