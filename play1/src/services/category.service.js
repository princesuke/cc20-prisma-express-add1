import prisma from "../config/prisma.js";

export async function getAllCategories() {
  const categories = prisma.category.findMany();
  return categories;
}
