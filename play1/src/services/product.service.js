import prisma from "../config/prisma.js";

export async function getAllProducts(status, page, limit) {
  const products = await prisma.product.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: { deleteAt: null, status: status || "ACTIVE" },
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
