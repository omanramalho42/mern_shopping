import express from 'express';

import expressAsyncHandler from 'express-async-handler';

import Order from '../models/OrderModel.js';

import { isAuth } from '../utils.js';

const orderRouter = express.Router();

orderRouter.get(
  "/mine", 
  isAuth, 
  expressAsyncHandler(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id });
    
    res.send(orders);
  })
);

orderRouter.get(
  "/:id", 
  isAuth, 
  expressAsyncHandler(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(order) {
      res.send(order);
    } else {
      res.status(404).send({ message: 'Pedido não encontrado' });
    }
  })
);

orderRouter.post(
  '/', 
  isAuth, 
  expressAsyncHandler( async (req, res, next) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
      shippingAddress: req.body.shippingAddress,
      payamentMethod: req.body.payamentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,
    });

    const order = await newOrder.save();
    res.status(201).send({ message: 'Novo pedido criado' , order });
  })
);

orderRouter.put(
  '/:id/pay', 
  isAuth, 
  expressAsyncHandler( async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.payamentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };
      const updatedOrder = await order.save();
      res.send({ message: 'pedido pago' , order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Pedido não encontrado' }); 
    }
  })
);

export default orderRouter;