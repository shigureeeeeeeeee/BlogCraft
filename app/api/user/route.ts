import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.json(session.user);
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const { name, email, image } = await req.json();

  await db.user.update({
    where: { id: session.user.id },
    data: { name, email, image },
  });

  return NextResponse.json({ message: "Profile updated" });
}