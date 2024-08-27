import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from "zod";

const commentCreateSchema = z.object({
  content: z.string().min(1).max(500),
  postId: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse("認証が必要です", { status: 403 });
    }

    const json = await req.json();
    const body = commentCreateSchema.parse(json);

    const comment = await db.comment.create({
      data: {
        content: body.content,
        authorId: session.user.id,
        postId: body.postId,
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 });
    }

    return NextResponse.json(null, { status: 500 });
  }
}
