import prisma from "../src/config/prisma.js";
import { faker } from "@faker-js/faker";

async function main() {
  await prisma.category.createMany({
    data: Array.from({ length: 20 }).map(() => ({
      name: faker.commerce.department(),
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
