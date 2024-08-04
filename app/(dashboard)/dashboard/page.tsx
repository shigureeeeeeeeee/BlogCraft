import DashboardHeader from "@/components/dashboard-header";
import DashboardShell from "@/components/dashboard-shell";
import EmptyPlaceholder from "@/components/empty-placeholer";
import PostCreateButton from "@/components/post-create-button";
import PostItem from "@/components/post-item";
import ProfileButton from "@/components/profile-button"; // Added import for ProfileButton
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions.pages?.signIn || "/login");
  }

  const posts = await db.post.findMany({
    where: {
      authorId: user.id,
    },
    select: {
      id: true,
      title: true,
      published: true,
      createdAt: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return (
    <DashboardShell>
      <DashboardHeader heading="投稿" text="記事の作成と管理">
        <div className="flex items-center space-x-2">
          <ProfileButton user={user} />
          <PostCreateButton />
        </div>
      </DashboardHeader>
      <div>
        {posts.length ? (
          <div className="divide-y divide-border rounded-md border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="post" />
            <EmptyPlaceholder.Title>
              記事が投稿されていません。
            </EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              記事を作成してください。
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  );
}