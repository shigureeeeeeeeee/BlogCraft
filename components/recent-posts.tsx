import Link from "next/link";

interface Post {
  id: string;
  title: string;
  published: boolean;
  createdAt: Date;
}

interface RecentPostsProps {
  posts: Post[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="flex items-center justify-between">
          <Link href={`/post/${post.id}`} className="hover:underline">
            {post.title}
          </Link>
          <span className="text-sm text-gray-500">
            {post.published ? "公開済み" : "下書き"}
          </span>
        </li>
      ))}
    </ul>
  );
}