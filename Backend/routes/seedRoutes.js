import express from "express";
import Product from "../models/ProductModel.js";
import data from '../data.js';
import User from "../models/UserModel.js";
import Order from "../models/OrderModel.js";

const seedRouter = express.Router();

seedRouter.get('/', async (req, res, next) => {
  console.log("created seeds");
  
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);

  res.send({ createdProducts, createdUsers });
});

export default seedRouter;