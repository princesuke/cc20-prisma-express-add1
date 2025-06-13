import {
  getAllProducts,
  createProduct,
  searchProduct,
  softDeleteProduct,
} from "../services/product.service.js";

export async function getProducts(req, res) {
  try {
    const products = await getAllProducts();
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function create(req, res) {
  try {
    const data = req.body;
    const result = await createProduct(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function search(req, res) {
  try {
    const name = req.query.q;
    const products = await searchProduct(name);
    res.json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function softDelete(req, res) {
  try {
    const id = parseInt(req.params.id);
    const result = await softDeleteProduct(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
