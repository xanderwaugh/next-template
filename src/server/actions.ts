"use server";
import "server-only";
import { prisma } from "./db";

// * Random Example Action
export async function getRandomUser() {
  const user = await prisma.user.findFirst({
    select: { id: true, name: true },
    orderBy: { id: "desc" },
  });

  return user;
}
