import { prisma } from "@/prisma";
import { NextResponse } from "next/server";

export async function Get(_: Request) {
  const todos = await prisma.todo.findMany();
  return NextResponse.json({ todos });
}
