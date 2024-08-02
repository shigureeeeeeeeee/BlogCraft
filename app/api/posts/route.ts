import { getServerSession } from "next-auth/next";
import * as z from "zod";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const postCreateSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 403 });
    }

    const { user } = session;

    // If user is on a free plan.
    // Check if user has reached limit of 3 posts.

    const json = await req.json();
    const body = postCreateSchema.parse(json);

    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: session.user.id,
      },
      select: {
        id: true,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(error.issues, { status: 422 });
    }

    if (error) {
      return NextResponse.json("Requires Pro Plan", { status: 402 });
    }

    return NextResponse.json(null, { status: 500 });
  }
}
