import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import ProfileContent from "@/components/profile-content";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const postsCount = await db.post.count({ where: { authorId: user.id } });
  const publishedPostsCount = await db.post.count({ where: { authorId: user.id, published: true } });
  const draftPostsCount = postsCount - publishedPostsCount;

  const recentPosts = await db.post.findMany({
    where: { authorId: user.id },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { id: true, title: true, published: true, createdAt: true },
  });

  const postStats = [
    { name: "公開済み", value: publishedPostsCount },
    { name: "下書き", value: draftPostsCount },
  ];

  const monthlyPostStats = await db.post.groupBy({
    by: ['createdAt'],
    where: { authorId: user.id },
    _count: true,
  }).then(results => 
    results.map(result => ({
      month: new Date(result.createdAt).toLocaleString('default', { month: 'long' }),
      count: result._count
    }))
  );

  return <ProfileContent user={user} postStats={postStats} recentPosts={recentPosts} monthlyPostStats={monthlyPostStats} />;
}