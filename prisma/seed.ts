/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Seed Data Example
 * @see https://freetestapi.com/api/v1/animals?sort=name&order=dec?limit=20
 *
 */
const seedDataExample = async () => {
  const LIMIT = 10 as const;
  // * Fake API Data
  const randImgs: string[] = [];

  for (let i = 0; i < LIMIT; i++) {
    // await sleep(1000);
    const img = faker.image.url({
      width: 200,
      height: 200,
    });
    randImgs.push(img);
  }

  console.log("# Rand Images:", randImgs.length);
  for (const img of randImgs) {
    console.log("Adding Image:", img);
    // await prisma.image.create({});
  }
};

const main = async () => {
  console.log("\n====================================\n");

  await seedDataExample();

  // * Happy Emoji Done
  console.log("✅ Done");
};

main().catch((_e) => {
  console.error(_e);
  process.exit(1);
});
