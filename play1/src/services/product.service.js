import prisma from "../config/prisma.js";

export async function getAllProducts() {
  const products = await prisma.product.findMany({
    where: { deleteAt: null },
  });
  return products;
}

export async function createProduct(data) {
  const result = await prisma.product.create({ data });
  return result;
}

export async function searchProduct(q) {
  const result = await prisma.product.findMany({
    where: {
      name: {
        contains: q,
      },
    },
  });

  return result;
}

export async function softDeleteProduct(id) {
  const result = await prisma.product.update({
    where: { id },
    data: {
      deleteAt: new Date(),
    },
  });

  return result;
}
