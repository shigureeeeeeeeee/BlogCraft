import { allPosts } from "@/.contentlayer/generated";
import { Mdx } from "@/components/mdx-components";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Comments } from "@/components/comments";
import CommentForm from "@/components/comment-form";
import { db } from "@/lib/db";
import { Comment } from "@/types/comment"; // Comment型をインポート

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const page = await getPostFromParams(params);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: "article",
      url: `${siteConfig.url}/${page.slug}`,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  // コメントを取得し、型を適切に変換する
  const comments: Comment[] = await db.comment.findMany({
    where: { postId: post.slug },
    include: { author: true },
    orderBy: { createdAt: "desc" },
  }).then(comments => comments.map(comment => ({
    id: comment.id,
    content: comment.content,
    createdAt: comment.createdAt.toISOString(),
    author: {
      name: comment.author.name || "匿名", // nullの場合はデフォルト値を設定
      email: comment.author.email || "",
      image: comment.author.image || ""
    }
  })));

  return (
    <article className="container max-w-3xl py-6 lg:py-10">
      <Link
        href={"/blog"}
        className={cn(buttonVariants({ variant: "ghost" }), "hidden")}
      >
        全ての記事を見る
      </Link>
      <div>
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          priority
          className="my-8 rounded-md border bg-muted transition-colors"
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-12" />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">コメント</h2>
        <Comments comments={comments} />
        <CommentForm postId={post.slug} />
      </div>
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          全ての記事を見る
        </Link>
      </div>
    </article>
  );
}