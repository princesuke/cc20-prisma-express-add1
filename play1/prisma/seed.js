import prisma from "../src/config/prisma.js";
import { faker } from "@faker-js/faker";

async function main() {
  // await prisma.user.deleteMany();

  await prisma.product.createMany({
    data: Array.from({ length: 20 }).map(() => ({
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseFloat(faker.commerce.price()),
      stock: faker.number.int({ min: 0, max: 100 }),
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
