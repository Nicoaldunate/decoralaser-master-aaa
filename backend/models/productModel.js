import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    nombre: { type: String, unique: true },
    slug: { type: String },
    precio: { type: Number },
    imagen1: { type: String },
    descripcion: { type: String },
    inStock: { type: String },
  },
  {
    timestamps: true,
  }
);

const Producto = mongoose.model('Producto', productSchema);

export default Producto;
