import { PrismaClient } from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const users = await prisma.user.findMany({});
    return NextResponse.json({ users });
  } catch (e) {
    return NextResponse.json({ e });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { name, email, password } = await req.json();
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return NextResponse.json({ user: newUser });
  } catch (e) {
    return NextResponse.json({ e });
  }
};
