import express from 'express';
import Producto from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.send(productos);
});

productRouter.get('/slug/:slug', async (req, res) => {
  const producto = await Producto.findOne({ slug: req.params.slug });
  if (producto) {
    res.send(producto);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
productRouter.get('/:id', async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  if (producto) {
    res.send(producto);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;
