import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (session) {
    return NextResponse.json(
      { url: authOptions.pages?.signIn || "/login" },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "認証されていません" }, { status: 401 });
}