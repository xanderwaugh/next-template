import { NextResponse } from "next/server";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function GET(_req: Request) {
  await sleep(20);

  return NextResponse.json({
    message: "Hello, World!",
  });
}
