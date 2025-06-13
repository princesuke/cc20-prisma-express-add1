import { getAllCategories } from "../services/category.service.js";

export async function getCategories(req, res) {
  const categories = await getAllCategories();
  res.json({ categories });
}
